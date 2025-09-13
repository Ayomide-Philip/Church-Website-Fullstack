import mongoose from "mongoose";

const FeedbackModels = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "Your email address is required"],
    maxlength: [100, "Your email address is required"],
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "Your message is required"],
    maxlength: [1000, "Your message is required"],
  },
});

const Feedback = mongoose.model("Feedback", FeedbackModels);

export default Feedback;
