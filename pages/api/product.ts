import { revalidatePath } from "next/cache";
import { Product } from "../../models/product";
import { redirect } from "next/navigation";
import { connectDb } from "../lib/connectDb";

// GET

export const getProduct = async (_id: string) => {
  try {
    connectDb();
    const product = await Product.findById(_id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};

// UPDATE

export const updateProduct = async (
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { _id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectDb();
    const updateFields: { [key: string]: string } = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(_id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update the product");
  }

  revalidatePath("/dashboard/product");
  redirect("/dashboard/products");
};

// ADD

export const addProduct = async (
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const newProduct = new Product({ title, desc, price, stock, color, size });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a new product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// DELETE

export const deleteProduct = async (
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete a product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
