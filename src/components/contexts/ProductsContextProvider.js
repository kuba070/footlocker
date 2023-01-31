import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const API = " http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! get products

  async function getProducts() {
    const { data } = await axios.get(API);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }

  //! add product

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //! delete product

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  //! get one product

  async function getProductDetails(id) {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  }

  //! patching edited product

  async function editedProduct(id, product) {
    await axios.patch(`${API}/${id}`, product);
    getProducts();
  }

  const values = {
    addProduct,

    getProducts,
    products: state.products,

    deleteProduct,

    getProductDetails,
    editedProduct,
    productDetails: state.productDetails,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
