import { Router } from "express";
import { createLeader } from "../controller/leaders.controller.js";
import protect from "../middleware/protect.middleware.js";

const leaderRouter = new Router();

leaderRouter.get("/", (req, res) => {
  res.json({ message: "Get all Leaders" });
});
leaderRouter.post("/",protect, createLeader);

export default leaderRouter;
