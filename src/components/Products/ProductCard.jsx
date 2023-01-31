import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";
import { useProducts } from "../contexts/ProductsContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/edit/${item.id}`)}
          size="small"
          variant="outlined"
        >
          Edit
        </Button>
        <Button
          onClick={() => deleteProduct(item.id)}
          size="small"
          variant="outlined"
        >
          Delete
        </Button>

        <IconButton onClick={() => addProductToCart(item)}>
          <Button variant="outlined"> В корзину</Button>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
