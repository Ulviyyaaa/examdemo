import { createBrowserRouter } from "react-router-dom";
import AddNewProduct from "../View/AddNewProduct";
import AddProductPage from "../View/AddProductPage";
import ProductPage from "../View/ProductPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductPage/>,
    },
    {
        path: "/add/:id",
        element: <AddProductPage/>,
      },
      {
        path: "/addnew",
        element: <AddNewProduct/>,
      },
  ]);
export {router}  