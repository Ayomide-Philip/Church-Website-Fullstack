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
    console.log(verifyToken);
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
  } catch (err) {
    console.log(err);
    return res.status(401).send({ success: false, error: "Unauthorized" });
  }
}
