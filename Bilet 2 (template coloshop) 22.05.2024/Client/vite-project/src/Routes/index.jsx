import AddProduct from "../Pages/Client/AddProduct";
import Basket from "../Pages/Client/Basket";
import ClientRoot from "../Pages/Client/ClientRoot";
import DetailProduct from "../Pages/Client/DetailProduct";
import Home from "../Pages/Client/Home";

export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "detail-product",
        element: <DetailProduct />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
