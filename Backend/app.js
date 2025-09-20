import express from "express";
import { FRONTEND_URL, PORT } from "./config/env.config.js";
import connectToDatabase from "./database/mongo.database.js";
import authRouter from "./router/auth.router.js";
import { errorHandler } from "./middleware/error.middleware.js";
import leaderRouter from "./router/leaders.router.js";
import feedbackRouter from "./router/feedback.router.js";
import cors from "cors";
import userRouter from "./router/user.router.js";
import multer from "multer";
const app = express();
const upload = multer({dest: "uploads/"});
connectToDatabase();
const corsOptions = {
  origin: FRONTEND_URL,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/leaders", leaderRouter);
app.use("/feedback", feedbackRouter);
app.use("/users", userRouter)
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
