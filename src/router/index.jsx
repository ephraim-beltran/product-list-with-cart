import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PropTypes from "prop-types";
import { ProductList } from "../pages/product-list-with-cart";

export function RouterComponent({ children }) {
  return <>{children}</>;
}
function Root() {
  return <RouterProvider router={router} />;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<ProductList />} />
      <Route path="/product-list-with-cart" element={<ProductList />} />
    </Route>,
  ),
);
RouterComponent.propTypes = {
  children: PropTypes.node,
};
