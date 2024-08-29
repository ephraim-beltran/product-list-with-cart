import styled from "./ProductList.module.css";
import { ProductGrid } from "./components/ProductGrid";
import { useState, useEffect } from "react";

// The function below is for fetch simulation only
import { fetchSimulated } from "../../mock-api";
export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const getProductList = async (url) => {
    const res = await fetchSimulated(url);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    (async () => {
      const url = "https://fake.url.com/v1";
      const data = await getProductList(url);
      setProductList(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <div className={styled.container}>
        <h2>Desserts</h2>
        {!isLoading ? (
          <ProductGrid productList={productList} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
