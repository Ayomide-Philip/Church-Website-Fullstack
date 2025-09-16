import { Router } from "express";
import {getAllUsers, getRequestUser, getUserById} from "../controller/user.controller.js";
import protect from "../middleware/protect.middleware.js";

const userRouter = new Router();

userRouter.get("/",protect, getAllUsers);
userRouter.get("/me",protect, getRequestUser);
userRouter.get("/:id", protect,getUserById);

export default userRouter;
