import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import styled from "./ProductGrid.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  productListHasError,
  productListIsLoading,
  selectProductList,
  loadList,
} from "./productListSlice";

export function ProductGrid() {
  const marketItems = useSelector(selectProductList);
  const isLoading = useSelector(productListIsLoading);
  const hasError = useSelector(productListHasError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadList());
  }, []);

  const list = marketItems.map((product) => {
    return <ProductCard key={product.id} productData={product} />;
  });
  return (
    <div className={styled.container}>
      {isLoading ? <p>Loading...</p> : list}
      {hasError && <p>There was an error.</p>}
    </div>
  );
}

ProductGrid.propTypes = {
  productList: PropTypes.array,
};
