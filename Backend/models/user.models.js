import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, "Your full name is required"],
      maxlength: [100, "Your full name is required"],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Your password should be at least 8 characters long"],
      maxlength: [100, "Your password should be at most 100 characters long"],
    },
  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", userSchema);
