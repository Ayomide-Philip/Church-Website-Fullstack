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
      minlength: 20,
      maxlength: 1000,
    },
    imageUrl: {
      type: String,
      minLength: 5,
      maxLength: 2000,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
  },
  { timestamps: true }
);

leadersModels.index({ name: 1, role: 1 }, { unique: true });

export const Leaders = mongoose.model("Leaders", leadersModels);
