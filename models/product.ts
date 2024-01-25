import { Product as ProductType } from "@/lib/types";
import { Schema, model, models } from "mongoose";

const productSchema = new Schema<ProductType>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product =
  models?.Product || model<ProductType>("Product", productSchema);
