import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
            Edit
          </Button>
          <Button onClick={() => deleteProduct(item.id)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
