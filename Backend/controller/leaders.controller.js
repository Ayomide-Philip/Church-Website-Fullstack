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
       if (err.code && err.code === 11000) {
      return res
        .status(400)
        .send({ success: false, message: "Role is the same as previous" });
    }
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
      return res
        .status(404)
        .send({ success: false, message: "No leader found with that Id" });
    }
    // return the leader if it exists
    return res
      .status(200)
      .send({ success: true, data: { leader: checkLeader } });
  } catch (err) {
    next(err);
  }
}

export async function editParticularUser(req, res, next) {
  try {
    const { leaderId } = req.params;
    // destructure  the req.body
    const { name, role, description, imageUrl } = req.body;
    // find the leader with this unique id
    const editedLeader = await Leaders.findById(leaderId);
    // check if any of this input changed
    if (!editedLeader) {
      return res
        .status(404)
        .send({ success: false, message: "No leader found with that Id" });
    }
    // change the detail about the leader that changed
      let edited = false;
      if (name !== undefined && name !== editedLeader.name) {
      editedLeader.name = name;
      edited = true;
    }
    if (role !== undefined && role !== editedLeader.role) {
      editedLeader.role = role;
      edited = true;
    }
    if (description !== undefined && description !== editedLeader.description) {
      editedLeader.description = description;
      edited = true;
    }
    if (imageUrl !== undefined && imageUrl !== editedLeader.imageUrl) {
      editedLeader.imageUrl = imageUrl;
      edited = true;
    }

    if (!edited) {
        return res.status(404).send({ success: false, message: "No field was edited" });
    }
    await editedLeader.save();
    res.status(200).send({ success: true, data: { leader: editedLeader } });
  } catch (err) {
    next(err);
  }
}

export async function deleteParticularLeader(req, res , next){
    try {
        const {leaderId} = req.params;
        // find the leader with the particular id
        const leader = await Leaders.findById(leaderId)
        //if no leader is found it should return an error
        if (!leader){
            return res.status(404).send({ success: false, error: "No leader found with that Id" });
        }

        const deletingLeader = await Leaders.deleteOne({_id : leaderId})
        console.log(deletingLeader);

        if (deletingLeader.acknowledged === false) {
            return res.status(400).json({success: false, error:"Unable to delete user"});
        }
        res.status(200).send({ success: true, message:"Delete user successful" });
    }catch(err){
        next(err)
    }
}
