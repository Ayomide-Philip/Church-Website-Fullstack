import { Router } from "express";
import {createLeader, getAllLeaders, getParticularLeader} from "../controller/leaders.controller.js";
import protect from "../middleware/protect.middleware.js";

const leaderRouter = new Router();

leaderRouter.get("/", getAllLeaders);
leaderRouter.post("/",protect, createLeader);
leaderRouter.get("/:leaderId",protect, getParticularLeader);

export default leaderRouter;
