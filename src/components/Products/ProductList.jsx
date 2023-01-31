import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductList;
