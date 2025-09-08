import express from "express";
import { PORT } from "./config/env.config.js";
import connectToDatabase from "./database/mongo.database.js";

const app = express();
connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
