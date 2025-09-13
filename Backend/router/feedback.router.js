import { Router } from "express";
import {
  getAllFeedbacks,
  postNewFeedback,
} from "../controller/feedback.controller.js";
import protect from "../middleware/protect.middleware.js";

const feedbackRouter = Router();

feedbackRouter.get("/", protect, getAllFeedbacks);
feedbackRouter.post("/", postNewFeedback);

export default feedbackRouter;
