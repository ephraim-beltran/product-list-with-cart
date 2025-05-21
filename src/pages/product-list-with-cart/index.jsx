import styled from "./ProductList.module.css";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCart } from "./components/ShoppingCart";
import { useModal } from "./hooks/useModal";
import {
  loadList,
  productListIsLoading,
  selectProductList,
} from "./components/ProductGrid/productListSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
export const ProductList = () => {
  const { toggleModal, modal } = useModal();
  const isLoading = useSelector(productListIsLoading);
  const productList = useSelector(selectProductList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList());
  }, []);
  return (
    <div className={`${styled.container} ${styled.defaults}`}>
      {isLoading && <Loader />}
      {!isLoading && productList && (
        <>
          <section className={styled.menu}>
            <h2>Desserts</h2>
            <ProductGrid />
          </section>
          <ShoppingCart toggleModal={toggleModal} />
          {modal && <OrderConfirmation toggleModal={toggleModal} />}
        </>
      )}
    </div>
  );
};
