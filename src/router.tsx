import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import { loader as ProductLoader } from './views/Products'
import NewProduct from './views/NewProduct'
import { action as newProductAction } from './views/NewProduct'
import EditProduct, {loader as editProductLoader, action as editProductAction} from './views/EditProduct'
import { action as editAvailabilityProduct } from './views/Products'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: ProductLoader,
                action: editAvailabilityProduct
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar',
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            }
        ]
    }
])