import { Product as ProductModel } from "../../models/product";
import { connectDb } from "../../lib/connectDb";
import { NextApiHandler } from "next";
import { Product } from "@/lib/types";

const productHandler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    addProduct(req, res);
  } else if (req.method === "PATCH") {
    updateProduct(req, res);
  } else return;
};

export default productHandler;

// UPDATE

export const updateProduct: NextApiHandler = async (req, res) => {
  const { _id, name, price, stock, available } = req.body;

  try {
    connectDb();
    const updateFields: { [key: string]: string | boolean } = {
      name,
      price,
      stock,
      available,
    };

    //   Object.keys(updateFields).forEach(
    //     (key) =>
    //       (updateFields[key] === "" || undefined) && delete updateFields[key]
    //   );

    await ProductModel.findByIdAndUpdate(_id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the product");
  }
};

// ADD - POST

export const addProduct: NextApiHandler<Product> = async (req, res) => {
  try {
    connectDb();

    const newProduct = new ProductModel(req.body);

    console.log("New product on API:");
    console.log(newProduct);

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a new product");
  }
};

// DELETE

// export const deleteProduct = async (
//   formData: Iterable<readonly [PropertyKey, any]>
// ) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectDb();
//     await ProductModel.findByIdAndDelete(id);
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to delete a product");
//   }
// };
