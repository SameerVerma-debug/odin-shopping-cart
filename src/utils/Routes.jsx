import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Shop } from "../pages/shop";
import { Cart } from "../pages/cart";
import { AllProducts } from "../components/AllProducts";
import { CategoryProducts } from "../components/CategoryProducts";

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}>
          <Route path="" element={<AllProducts/>}/>
          <Route path="category/:name" element={<CategoryProducts/>}/>
        </Route>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}