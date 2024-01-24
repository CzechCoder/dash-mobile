import { Schema, model, models } from "mongoose";

interface Product {
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
}

const productSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product =
  models?.Product || model<Product>("Product", productSchema);
