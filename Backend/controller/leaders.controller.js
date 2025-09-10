import { Leaders } from "../models/leaders.models.js";

export async function createLeader(req, res, next) {
  try {
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

export async function getAllLeaders(req, res, next) {
  try {
    const allUsers = await Leaders.find();
    return res.status(200).json({ success: true, data: { leaders: allUsers } });
  } catch (err) {
    next(err);
  }
}

export async function getParticularLeader(req, res, next) {
  try {
    const { leaderId } = req.params;
    // check i the user exist
      const checkLeader = await Leaders.findById(leaderId);
      // return an error if no user is found
      if (!checkLeader) {
          return res.status(404).send({success: false, message: "No leader found with that Id" });
      }
      // return the leader if it exists
      return res.status(200).send({ success: true, data: { leader: checkLeader } });
  } catch (err) {
    next(err);
  }
}
