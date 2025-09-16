import { Router } from "express";
import { getAllUsers, getUserById } from "../controller/user.controller.js";

const userRouter = new Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
