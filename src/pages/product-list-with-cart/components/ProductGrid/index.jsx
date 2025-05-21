import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import styled from "./ProductGrid.module.css";
import PropTypes from "prop-types";
import { selectProductList } from "./productListSlice";

export function ProductGrid() {
  const marketItems = useSelector(selectProductList);

  const list = marketItems.map((product) => {
    return <ProductCard key={product.id} productData={product} />;
  });
  return <div className={styled.container}>{list}</div>;
}

ProductGrid.propTypes = {
  productList: PropTypes.array,
};
