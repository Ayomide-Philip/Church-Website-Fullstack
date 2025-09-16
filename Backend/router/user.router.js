import {Router} from "express";

const userRouter = new Router();

userRouter.get("/", (req, res) => {
    res.json({message:"All users retrieved"});
})

export default  userRouter;