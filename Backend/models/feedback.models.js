import mongoose from "mongoose";

const FeedbackModels = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      minlength: [5, "Your email address is required"],
      maxlength: [100, "Your email address is required"],
    },
    message: {
      type: String,
      trim: true,
      minlength: [5, "Your message is required"],
      maxlength: [1000, "Your message is required"],
    },
  },
  { timestamps: true }
);

FeedbackModels.index({ email: 1, message: 1 }, { unique: true });
const Feedback = mongoose.model("Feedback", FeedbackModels);

export default Feedback;
