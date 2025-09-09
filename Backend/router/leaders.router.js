import { Router } from "express";
import { createLeader } from "../controller/leaders.controller.js";

const leaderRouter = new Router();

leaderRouter.get("/", (req, res) => {
  res.json({ message: "Get all Leaders" });
});
leaderRouter.post("/", createLeader);

export default leaderRouter;
