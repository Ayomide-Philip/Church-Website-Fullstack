import { Router } from "express";
import {
    createLeader, deleteParticularLeader,
    editParticularUser,
    getAllLeaders,
    getParticularLeader
} from "../controller/leaders.controller.js";
import protect from "../middleware/protect.middleware.js";

const leaderRouter = new Router();

leaderRouter.get("/", getAllLeaders);
leaderRouter.post("/",protect, createLeader);
leaderRouter.get("/:leaderId",protect, getParticularLeader);
leaderRouter.patch("/:leaderId", protect, editParticularUser);
leaderRouter.delete("/:leaderId", protect, deleteParticularLeader)

export default leaderRouter;
