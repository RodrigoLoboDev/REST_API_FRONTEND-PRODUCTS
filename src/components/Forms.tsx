import { ProductsType } from "../types"
import { useMemo } from "react"

type FormsProps = {
    product: ProductsType
}

const availabilityOptions = [
    { name: 'Disponible', value: 1},
    { name: 'No Disponible', value: 0}
 ]

const Forms = ({product} : FormsProps) => {

    const isExistProduct = useMemo(() => !Object.values(product).includes(''), [product])
    // console.log(Number(product.availability));
    

  return (
    <>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="name"
            >Nombre Producto:</label>
            <input 
                id="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del Producto"
                name="name"
                defaultValue={product.name}
            />
        </div>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="price"
            >Precio:</label>
            <input 
                id="price"
                type="number"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Precio Producto. ej. 200, 300"
                name="price"
                defaultValue={product.price}
            />
        </div>

        {isExistProduct && (
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="availability"
                >Disponibilidad:</label>
                <select 
                    id="availability"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    name="availability"
                    defaultValue={Number(product.availability)}
                >
                    {availabilityOptions.map(option => (
                        <option 
                            key={option.name} 
                            value={option.value.toString()}>
                                {option.name}
                        </option>
                    ))}
                </select>
            </div>
        )}

        <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value={isExistProduct ? "Guardar Cambios" : "Registrar Producto"}
        />
    </>
  )
}

export default Forms