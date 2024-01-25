import axios from "axios";
import { Product } from "./types";

// PRODUCTS

export const getProducts = async () => {
  const response = await axios.get<Product[]>("/api/products");
  return response.data;
};

export const addProduct = async (newProduct: Product) => {
  const response = await axios.post<Product>("/api/product", newProduct);
  return response.data;
};

export const updateProduct = async (updatedValues: Product) => {
  const response = await axios.patch<Product>("/api/product", updatedValues);
  return response.data;
};

// CUSTOMERS

export const getCustomers = async () => {
  const response = await axios.get<Product[]>("/api/customers");
  return response.data;
};

export const getCustomer = async (_id: string) => {
  const response = await axios.get<Product>("/api/customer");
  return response.data;
};
