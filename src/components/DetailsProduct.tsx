import { useNavigate, useFetcher } from "react-router-dom"
import { formatearDinero } from "../helpers/indes"
import { ProductsType } from "../types"
import { deleteProduct } from "../services/ProductServices"

type DetailsProductProp = {
    product: ProductsType
}

const DetailsProduct = ({product} : DetailsProductProp) => {

    const navigate = useNavigate()

    const fetcher = useFetcher()

    const handleClick = async () => {

        const confirmar = confirm('¿Esta Seguro de Eliminar el Producto?')

        if (confirmar) {
            await deleteProduct(product.id)
            navigate('/')
            alert('Producto Eliminado Correctamente')
        }
    }

  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
            {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {formatearDinero(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
            <fetcher.Form
                method="POST"
            >
                <button
                    type="submit"
                    name="id"
                    value={product.id.toString()}
                    className={`${product.availability ? "text-black border-gray-700" : "text-red-700 border-red-700"} border w-full p-2 font-bold text-sm cursor-pointer rounded`}
                >
                    {product.availability ? "Disponible" : "No Disponible"}
                </button>
            </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
            <div className=" flex gap-4">
                <button
                    onClick={() => navigate(`productos/${product.id}/editar`)}
                    className=" py-2 px-5 border-none rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all text-center font-bold text-white"
                    type="button"
                >Editar</button>
                <button
                    onClick={handleClick}
                    className=" py-2 px-5 border-none rounded-md bg-red-600 hover:bg-red-800 transition-all text-center font-bold text-white"
                    type="button"
                >Eliminar</button>
            </div>
        </td>
    </tr> 
  )
}

export default DetailsProduct