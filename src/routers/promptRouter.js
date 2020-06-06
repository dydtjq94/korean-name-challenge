import express from "express";
import routes from "../routes";
import {
  promptDetailCon,
  promptCon,
  listCon,
} from "../controllers/promptController";

const promptRouter = express.Router();

promptRouter.get(routes.prompt, promptCon);
promptRouter.get(routes.list, listCon);
promptRouter.get(routes.promptDetail(), promptDetailCon);

export default promptRouter;
