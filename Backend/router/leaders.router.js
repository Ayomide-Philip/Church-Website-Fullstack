import { Router } from "express";
import {createLeader, getAllLeaders} from "../controller/leaders.controller.js";
import protect from "../middleware/protect.middleware.js";

const leaderRouter = new Router();

leaderRouter.get("/", getAllLeaders);
leaderRouter.post("/",protect, createLeader);

export default leaderRouter;
