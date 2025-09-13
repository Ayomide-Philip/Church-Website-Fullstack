import jwt from "jsonwebtoken";
import { JSON_WEB_TOKEN_SECRET } from "../config/env.config.js";
import { Users } from "../models/user.models.js";

export default async function protect(req, res, next) {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    //check if a token exist
    if (!token) {
      return res
        .status(401)
        .send({ success: false, error: "No token provided" });
    }
    // verify the token
    const verifyToken = jwt.verify(token, JSON_WEB_TOKEN_SECRET);

    // if no token is provided
    if (!verifyToken) {
      return res
        .status(401)
        .send({ success: false, error: "Invalid token provided" });
    }
    //check if the user exists in the database
    const verifyUser = await Users.findById(verifyToken.userId);

    // check if no user was returned
    if (!verifyUser) {
      return res.status(401).send({ success: false, error: "User not found" });
    }

    req.user = { id: verifyToken.userId };
    req.role ={role : verifyToken.role}
    next();
  } catch (err) {
    console.log(err.message);
    if (err.message === "jwt expired") {
      return res.status(401).send({ success: false, error: "Session expired" });
    }
    return res.status(401).send({ success: false, error: "Unauthorized" });
  }
}
