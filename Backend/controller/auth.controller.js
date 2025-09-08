import {Users} from "../models/user.models.js";
import hashPlainPassword from "../utility/hashpassword.utility.js";

export async function signUp(req, res, next){
    try {
        let {fullName, email, password} = req.body;
        if (!fullName || !email || !password) {
           return res.status(400).json({success: false ,message: 'Inputs is required'});
        }
        const newUser = await Users.create({fullName , email, password : await hashPlainPassword(password)})
        res.json(newUser)
    }catch(err){
        next(err);
    }
}

export async function login(req, res, next){
   try {
       console.log(req.body);
   }catch(err){
       next(err);
   }
}