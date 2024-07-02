import { Link, useActionData, ActionFunctionArgs, Form, redirect, useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import { getProduct, updateProduct } from '../services/ProductServices';
import Forms from '../components/Forms';
import Error from '../components/Error';
import { ProductsType } from '../types';


export const loader = async ({params} : LoaderFunctionArgs) => {   

    if (params.id !== undefined) {
        const product = await getProduct(+params.id)
        
        if (!product) {
            // Si el id del producto no existe podemos enviar este error que no es muy vistoso
            // throw new Response('', {status: 404, statusText: 'Producto No Encontrado'})
            // O redireccionar al usuario a la pagina principal 
            return redirect('/')
        }
        return product
    }
}

export const action = async ({request, params} : ActionFunctionArgs) => {
    // console.log('Desde action...');
    const data = Object.fromEntries( await request.formData() )

    let error = '';
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son Obligatorios'
        return error
    } else {
        if (params.id !== undefined) {
            await updateProduct(data, +params.id)
            return redirect('/')
        }
    }
}

const EditProduct = () => {
    
    const error = useActionData() as string 
    const product = useLoaderData() as ProductsType
    
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
                product={product}
            />
            
        </Form>
    </>
  )
}

export default EditProduct



