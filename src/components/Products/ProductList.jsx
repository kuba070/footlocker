import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex", margin: "3rem" }}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
