import Feedback from "../models/feedback.models.js";

export async function getAllFeedbacks(req, res, next) {
  try {
    const feedbacks = await Feedback.find();
    if (!feedbacks) {
      return res
        .status(404)
        .json({ success: false, message: "No feedbacks found." });
    }
    return res.status(200).json({ success: true, data: { feedbacks } });
  } catch (err) {
    next(err);
  }
}

export async function postNewFeedback(req, res, next) {
  try {
    // destructure the req.body
    const { email, message } = req.body;
    // check if the email is undefined
    if (email === undefined) {
      return res
        .status(400)
        .send({ success: false, message: "Email is required" });
    }
    // check if the message is undefined
    if (message === undefined) {
      return res
        .status(400)
        .send({ success: false, message: "Message is required" });
    }
    // if those conditions are passed, pass them to the backend
    const feedback = await Feedback.create({ email, message });
    // return the new feedback back
    return res.status(200).send({ success: true, data: { feedback } });
  } catch (err) {
    if (err.code && err.code === 11000) {
      return res
        .status(400)
        .send({ success: false, message: "Message is the same as previous" });
    }
    next(err);
  }
}
