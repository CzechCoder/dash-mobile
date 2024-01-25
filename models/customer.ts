import { Customer as CustomerType } from "@/lib/types";
import { Schema, model, models } from "mongoose";

const customerSchema = new Schema<CustomerType>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    orders: {
      type: [Number],
    },
  },
  { timestamps: true }
);

export const Customer =
  models?.Customer || model<CustomerType>("Customer", customerSchema);
