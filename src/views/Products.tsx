import { Link, useLoaderData, ActionFunctionArgs } from 'react-router-dom'
import { getProducts, updateAvailability } from '../services/ProductServices'
import { ProductsType } from '../types'
import DetailsProduct from '../components/DetailsProduct'

export const loader = async () => {
  const products = await getProducts()
  return products
}

export const action = async ({request} : ActionFunctionArgs) => {
  // console.log('desde request');
  const data = Object.fromEntries( await request.formData() )
  // console.log(data);
  await updateAvailability(+data.id)
  
  return {}
}

const Products = () => {

  const data = useLoaderData() as ProductsType[]  

  return (
    <>
      <div className='flex justify-between items-center'>
          <h2 className=' text-slate-500 text-xl md:text-2xl uppercase font-black'>Productos</h2>
          <Link
              className=' text-white text-center font-bold bg-indigo-600 hover:bg-indigo-800 transition-all py-2 px-5 rounded-md shadow-sm'
              to={'productos/nuevo'}
          >Agregar Producto</Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white hidden md:table-header-group">
              <tr>
                  <th className="p-2">Producto</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Disponibilidad</th>
                  <th className="p-2">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {data.map(product => (
              <DetailsProduct 
                product={product}
                key={product.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products