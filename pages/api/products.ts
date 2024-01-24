import { type NextApiHandler } from "next";
import { connectDb } from "../lib/connectDb";
import { Product as ProductModel } from "@/models/product";
import { Product } from "../lib/types";

const productsHandler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    getProductsHandler(req, res);
  } else if (req.method === "POST") {
    postProductHandler(req, res);
  }
};

export default productsHandler;

const getProductsHandler: NextApiHandler<Product[]> = async (req, res) => {
  try {
    connectDb();

    const products: Product[] = await ProductModel.find();

    res.status(200).json(products);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

const postProductHandler: NextApiHandler<any> = async (req, res) => {
  res.json({ message: "Not working yet" });
};
