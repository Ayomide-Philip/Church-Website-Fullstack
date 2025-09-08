import { Users } from "../models/user.models.js";
import hashPlainPassword from "../utility/hashpassword.utility.js";

export async function signUp(req, res, next) {
  try {
    // get all the necessary information to sign up a new account
    let { fullName, email, password } = req.body;
    // check if any part of it is not there, if its not there it should return an error
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Inputs is required" });
    }
    // check if the user exist already
    const existingUser = await Users.find({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }
    // create  a new user and add it to the db
    const newUser = await Users.create({
      fullName,
      email,
      password: await hashPlainPassword(password),
    });
    // generate a token for the user

    // send some info about the new user
    res.json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    console.log(req.body);
  } catch (err) {
    next(err);
  }
}
