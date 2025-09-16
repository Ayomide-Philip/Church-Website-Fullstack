import { Users } from "../models/user.models.js";

export async function getAllUsers(req, res, next) {
  try {
    const users = await Users.find().select("-password");
    return res.status(200).send({ success: true, data: { users } });
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
        .send({ success: false, error: "Id wasn't passed" });
    }
    const user = await Users.findById(id);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, error: "User with id not found" });
    }

    return res.status(200).send({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
}
