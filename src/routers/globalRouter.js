import express from "express";
import routes from "../routes";
import { homeCon } from "../controllers/postController";
import { loginCon, logoutCon, joinCon } from "../controllers/userController";
import { rankCon } from "../controllers/nationController";
import {
  getPromptUploadCon,
  postPromptUploadCon,
} from "../controllers/promptController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeCon);
globalRouter.get(routes.login, loginCon);
globalRouter.get(routes.logout, logoutCon);
globalRouter.get(routes.join, joinCon);

globalRouter.get(routes.rank, rankCon);

globalRouter.get(routes.promptUpload, getPromptUploadCon);
globalRouter.post(routes.promptUpload, postPromptUploadCon);

export default globalRouter;
