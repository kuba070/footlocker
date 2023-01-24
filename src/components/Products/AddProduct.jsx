import { Button, TextField } from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="outlined">Create Product</Button>
    </div>
  );
};

export default AddProduct;
