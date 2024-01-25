import { type NextApiHandler } from "next";
import { connectDb } from "../../lib/connectDb";
import { Product as ProductModel } from "@/models/product";
import { Product } from "../../lib/types";

const productsHandler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    getProducts(req, res);
  } else if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }
};

export default productsHandler;

const getProducts: NextApiHandler<Product[]> = async (req, res) => {
  try {
    connectDb();

    const products: Product[] = await ProductModel.find();

    res.status(200).json(products);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
