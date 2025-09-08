import mongoose from "mongoose";
import { DATABASE_URL } from "../config/env.config.js";

if (!DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

export default async function connectToDatabase() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
