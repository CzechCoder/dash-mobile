import axios from "axios";
import { Product } from "./types";

// PRODUCTS

export const getProducts = async () => {
  const response = await axios.get<Product[]>("/api/products");
  return response.data;
};

export const getProduct = async (_id: string) => {
  const response = await axios.get<Product>("/api/product");
  return response.data;
};
