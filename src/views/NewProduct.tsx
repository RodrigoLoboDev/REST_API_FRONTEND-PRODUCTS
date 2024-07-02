import { Link, useActionData, ActionFunctionArgs, Form, redirect } from 'react-router-dom'
import { createProduct } from '../services/ProductServices';
import Forms from '../components/Forms';
import Error from '../components/Error';

export const action = async ({request} : ActionFunctionArgs) => {
    // console.log('Desde action...');
    const data = Object.fromEntries( await request.formData() )
    // console.log(data);
    let error = '';
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son Obligatorios'
        return error
    } else {
        await createProduct(data)
        return redirect('/')
    }
}

const NewProduct = () => {

    const error = useActionData() as string    
    
  return (
    <>
        <div className='flex justify-between items-center'>
            <h2 className=' text-slate-500 text-2xl uppercase font-black'>Registrar Producto</h2>
            <Link
                className=' text-white text-center font-bold bg-indigo-600 hover:bg-indigo-800 transition-all py-2 px-5 rounded-md shadow-sm'
                to={'/'}
            >Volver a Productos</Link>
        </div>

        <Form
            className="mt-10"    
            method='POST'  
        >
            {error ? (
                <Error>{error}</Error>
            ) : '' }

            <Forms 
                product={{
                    id: 0,
                    name: '',
                    price: 0,
                    availability: false
                }}
            />
            
        </Form>

        
    </>
  )
}

export default NewProduct