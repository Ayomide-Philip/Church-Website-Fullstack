import { Router } from "express";
import { getAllBlogs } from "../controller/blog.controller.js";

const blogRouter = Router();

blogRouter.get("/", getAllBlogs);

export default blogRouter;
