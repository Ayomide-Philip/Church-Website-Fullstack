import { Leaders } from "../models/leaders.models.js";

export async function createLeader(req, res, next) {
  try {
    //
    const { id } = req.user;
    // destructuring the request body
    const { name, role, description, imageUrl } = req.body;
    // check if the required thing needed are passed
    if (name === undefined || role === undefined || description === undefined) {
      return res
        .status(400)
        .send({ success: false, message: "Inputs required" });
    }
    // if required fields are passed add them to the db
    const newLeader = await Leaders.create({
      name,
      role,
      description,
      imageUrl,
      creatorId: id,
    });
    return res.status(201).send({ success: true, data: { leader: newLeader } });
  } catch (err) {
    next(err);
  }
}
