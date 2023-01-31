import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContextProvider";

const EditProduct = () => {
  const { getProductDetails, editedProduct, productDetails } = useProducts();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

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
        EDIT PANEL
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
        value={product.image || ""}
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
        value={product.description || ""}
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
        value={product.price || ""}
      />
      <br />
      <Button
        onClick={() => {
          editedProduct(id, product);
          navigate("/products");
        }}
        style={{ margin: "auto", width: "50%" }}
        variant="outlined"
      >
        Save Product
      </Button>
    </div>
  );
};

export default EditProduct;
