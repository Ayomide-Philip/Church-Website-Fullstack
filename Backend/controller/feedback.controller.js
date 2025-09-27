import Feedback from "../models/feedback.models.js";

export async function getAllFeedbacks(req, res, next) {
  try {
    const feedbacks = await Feedback.find();
    if (!feedbacks) {
      return res
        .status(404)
        .json({ success: false, error: "No feedbacks found." });
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
        .json({ success: false, error: "Email is required" });
    }
    // check if the message is undefined
    if (message === undefined) {
      return res
        .status(400)
        .json({ success: false, error: "Message is required" });
    }
    // if those conditions are passed, pass them to the backend
    const feedback = await Feedback.create({ email, message });
    // return the new feedback back
    return res.status(200).json({ success: true, data: { feedback } });
  } catch (err) {
    if (err.code && err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, error: "You have sent this feedback to us, we would work on it as soon as possible." });
    }
    next(err);
  }
}

export async function getFeedbackById(req, res, next) {
  try {
    // get the feedback id
    const { feedbackId } = req.params;
    // get the id from the db
    const feedback = await Feedback.findById(feedbackId);
    // if no feedback was found return an error
    if (!feedback) {
      return res
        .status(404)
        .json({ success: false, error: "Feedback not found" });
    }
    // return the feedback when found
    return res.status(200).json({ success: true, data: { feedback } });
  } catch (err) {
    next(err);
  }
}

export async function deleteFeedbackById(req, res, next) {
  try {
    // get the feedback id
    const { feedbackId } = req.params;
    // check if the feedback exist
    let feedback = await Feedback.findById(feedbackId);
    // if it doesn't exist return a 404
    if (!feedback) {
      return res
        .status(404)
        .json({ success: false, error: "Feedback not found" });
    }
    // else delete it by its id
    feedback = await Feedback.deleteOne({ _id: feedbackId });
    // if there is an error in deleting the feedback return 404
    if (!feedback.acknowledged) {
      return res
        .status(404)
        .json({ success: false, error: "Unable to delete feedback" });
    }
    // if post deleted successfully return 200
    return res
      .status(200)
      .json({ success: true, message: "Feedback deleted successfully" });
  } catch (err) {
    next(err);
  }
}
