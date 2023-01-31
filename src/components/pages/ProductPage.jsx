import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductList from "../Products/ProductList";
import SearchBar from "../Products/SearchBar";

const ProductPage = () => {
  return (
    <Box p={5} sx={{ marginTop: "5rem" }}>
      <Grid container spacing={3}>
        <ProductList />
        <SearchBar />
      </Grid>
    </Box>
  );
};

export default ProductPage;
