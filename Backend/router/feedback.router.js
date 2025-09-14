import { Router } from "express";
import {
    deleteFeedbackById,
    getAllFeedbacks, getFeedbackById,
    postNewFeedback,
} from "../controller/feedback.controller.js";
import protect from "../middleware/protect.middleware.js";

const feedbackRouter = Router();

feedbackRouter.get("/", protect, getAllFeedbacks);
feedbackRouter.post("/", postNewFeedback);
feedbackRouter.get("/:feedbackId",protect,getFeedbackById);
feedbackRouter.delete("/:feedbackId",protect, deleteFeedbackById);

export default feedbackRouter;
