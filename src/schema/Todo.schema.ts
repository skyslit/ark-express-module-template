import { Schema } from "mongoose";

export default new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
    },
  }
);
