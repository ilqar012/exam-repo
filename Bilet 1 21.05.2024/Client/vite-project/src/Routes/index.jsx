import AddProduct from "../Pages/Client/AddProduct";
import Basket from "../Pages/Client/Basket";
import ClientRoot from "../Pages/Client/ClientRoot";
import Home from "../Pages/Client/Home";
import ProductDetail from "../Pages/Client/ProductDetail";

 
export const ROUTES = [
    {
        path: "/",
        element: <ClientRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "add-product",
                element: <AddProduct/>
            },
            {
                path: "product-detail",
                element: <ProductDetail/>
            },
            {
                path: "basket",
                element: <Basket/>
            }
        ]
    }
]