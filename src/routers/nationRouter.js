import express from "express";
import routes from "../routes";
import { nationCon, nationDetailCon } from "../controllers/nationController";

const nationRouter = express.Router();

nationRouter.get(routes.home, nationCon);
nationRouter.get(routes.nationDetail, nationDetailCon);

export default nationRouter;
