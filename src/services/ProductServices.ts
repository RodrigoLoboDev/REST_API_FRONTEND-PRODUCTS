import axios from 'axios'
import { DraftProductsSchema, Product, ProductsType, ProductsSchema, ProductSchema } from '../types';

export async function createProduct (datos : Product) {
    // console.log(datos);    
    try {
        // Validamos que los datos que enviamos tiene el schema que definimos
        const result = DraftProductsSchema.safeParse({
            name: datos.name,
            price: +datos.price
        })
        
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, result.data)
        }

    } catch (error) {
        console.log(error);
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)
        
        // Validamos que los datos que recibimos son los que esperamos, filtramos tambien los datos necesarios unicamente
        const result = ProductsSchema.safeParse(data.data)
        if (result.success) {
            return result.data
        }
        
    } catch (error) {
        console.log(error);
    }
}

export async function getProduct(id : ProductsType['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)        
        
        // Validamos que los datos que recibimos son los que esperamos, filtramos tambien los datos necesarios unicamente
        const result = ProductSchema.safeParse(data.data)
        
        if (result.success) {
            return result.data
        }
        
    } catch (error) {
        console.log(error);
    }
}

export async function updateProduct (datos : Product, id : ProductsType['id']) {
    // console.log(datos);    
    // console.log(Boolean(+datos.availability));
    
    try {
        // Validamos que los datos que enviamos tiene el schema que definimos
        const result = ProductSchema.safeParse({
            id: id,
            name: datos.name,
            price: +datos.price,
            availability: Boolean(+datos.availability)
        })
        
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            // console.log(result.data);
            await axios.put(url, result.data)
        }

    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(id: ProductsType['id']) {    
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error);
    }
}

export async function updateAvailability(id: ProductsType['id']) {  
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error);
    }
}