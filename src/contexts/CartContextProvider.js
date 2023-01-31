import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

export const cartContext = createContext();

export const useCart = () => useContext(cartContext); // custom hook for context

//
//

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };

    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")); // достаем из LocStorg все данные под ключом cart

    // делаем проверку , есть ли чтото в cart
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });

    const addProductToCart = (product) => {
      let cart = JSON.parse(localStorage.getItem("cart"));

      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }

      let newProduct = {
        item: product,
        count: 1,
        subPrice: +product.price,
      };

      let productToFind = cart.products.filter(
        (elem) => elem.item.id == product.id
      );

      if (productToFind.length == 0) {
        cart.products.push(newProduct);
      } else {
        cart.products = cart.products.filter(
          (elem) => elem.item.id !== product.id
        );
      }

      cart.totalPrice = calcTotalPrice(cart.products);

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
      Sptc();
    };

    const checkProductInCart = (id) => {
      let cart = JSON.parse(localStorage.getItem("cart"));

      if (cart) {
        let newCart = cart.products.filter((elem) => elem.item.id == id);
        return newCart.length > 0 ? true : false;
      }
    };

    const changeProductCount = (count, id) => {
      const cart = JSON.parse(localStorage.getItem("cart"));

      cart.products = cart.products.map((product) => {
        if (product.item.id == id) {
          product.count = count;
          product.subPrice = calcSubPrice(product);
        }
        return roduct;
      });
      cart.totalPrice = calcTotalPrice(cart.products);

      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch({
        type: CART.GET_CART_LENGTH,
        payload: cart,
      });
    };

    //delete from localStorage

    const deleteCartProduct = (id) => {
      let cart = JSON.parse(localStorage.getItem("cart"));

      cart.products = cart.products.filter((elem) => elem.item.id != id);

      cart.totalPrice = calcTotalPrice(cart.products);

      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
    };

    const values = {
      getCart,
      addProductToCart,
      checkProductInCart,
      cart: state.cart,
      changeProductCount,
      deleteCartProduct,
    };
    return (
      <cartContext.Provider value={values}>{children}</cartContext.Provider>
    );
  };
};

export default CartContextProvider;
