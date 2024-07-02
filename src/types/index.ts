import { z } from 'zod'

export const DraftProductsSchema = z.object({
    name: z.string(),
    price: z.number(),
})

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    availability: z.boolean()
})

export const ProductsSchema = z.array(ProductSchema)

export type Product = {
    [k: string]: FormDataEntryValue;
}

export type ProductsType = z.infer<typeof ProductSchema>