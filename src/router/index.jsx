import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "../App";
import { ProductList } from "../pages/product-list-with-cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ProductList />} />
      <Route path="/product-list-with-cart" element={<ProductList />} />
    </Route>,
  ),
);
export function RouterComponent() {
  return <RouterProvider router={router} />;
}
