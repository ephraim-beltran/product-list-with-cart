import { ProductCard } from "../ProductCard";
import styled from "./ProductGrid.module.css";
import { useMarketApi } from "../../hooks/useMarketApi.jsx";
import PropTypes from "prop-types";

export function ProductGrid() {
  const { marketItems, status } = useMarketApi();
  const list = marketItems.map((product) => {
    return <ProductCard key={product.id} productData={product} />;
  });
  return (
    <div className={styled.container}>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "success" ? (
        list
      ) : (
        status === "error" && <p>There was an error loading the market data.</p>
      )}
    </div>
  );
}

ProductGrid.propTypes = {
  productList: PropTypes.array,
};
