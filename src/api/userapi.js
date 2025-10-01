// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/products";

// Get all products
export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Create new product
export const createProduct = async (product) => {
  const res = await axios.post(API_URL, product);
  return res.data;
};

// Update product by id
export const updateProduct = async (id, product) => {
  const res = await axios.put(`${API_URL}/${id}`, product);
  return res.data;
};

// Delete product by id
export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
