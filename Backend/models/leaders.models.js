import mongoose from "mongoose";

const leadersModels = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    imageUrl: {
      type: String,
      minLength: 5,
      maxLength: 2000,
    },
  },
  { timestamps: true }
);

export const Leaders = mongoose.model("Leaders", leadersModels);
