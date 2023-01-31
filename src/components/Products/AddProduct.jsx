import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductsContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    image: "",
    description: "",
    price: 0,
  });

  function handleValues(e) {
    if (e.target.value === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <br />
      <h1
        style={{
          margin: "auto",
        }}
      >
        ADMIN PANEL
      </h1>
      <br />
      <TextField
        onChange={handleValues}
        style={{
          width: "50%",
          margin: "auto",
        }}
        id="outlined-basic"
        label="Image"
        variant="outlined"
        name="image"
      />
      <br />
      <TextField
        onChange={handleValues}
        style={{
          width: "50%",
          margin: "auto",
        }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
      />
      <br />
      <TextField
        onChange={handleValues}
        style={{
          width: "50%",
          margin: "auto",
        }}
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
      />
      <br />
      <Button
        onClick={() => {
          addProduct(product);
          setProduct({ image: "", description: "", price: 0 });
        }}
        style={{ margin: "auto", width: "50%" }}
        variant="outlined"
      >
        Create Product
      </Button>
    </div>
  );
};

export default AddProduct;
