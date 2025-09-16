import { Users } from "../models/user.models.js";

export async function getAllUsers(req, res, next) {
  try {
    const users = await Users.find().select("-password");
    return res.status(200).json({ success: true, data: { users } });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res
        .status(404)
        .json({ success: false, error: "Id wasn't passed" });
    }
    const user = await Users.findById(id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "User with id not found" });
    }

    return res.status(200).json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
}

export async function getRequestUser(req, res, next) {
  try {
    // getting the user if from the req.user
    const { id } = req.user;
    // getting the user by ID
    const user = await Users.findById(id).select("-password -email");
    // if the user doesn't exist return a 404
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "User with id not found" });
    }
    //if user exist return the user details
    return res.status(200).json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
}
