import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();

  //! get products

  async function getProducts() {
    const { data } = await axios(`${API}${window.location.search}`);

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

  //! search

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}? ${search.toString()}`;
    console.log(search.toString);
    console.log(url);
    navigate(url);
  };

  const values = {
    addProduct,

    getProducts,
    products: state.products,

    deleteProduct,

    getProductDetails,
    editedProduct,
    productDetails: state.productDetails,

    fetchByParams,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
