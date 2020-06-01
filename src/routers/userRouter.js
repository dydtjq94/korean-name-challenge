import express from "express";
import routes from "../routes";
import {
  userCon,
  userDetailCon,
  editProfileCon,
  changePasswordCon,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, userCon);
userRouter.get(routes.userDetail, userDetailCon);
userRouter.get(routes.editProfile, editProfileCon);
userRouter.get(routes.changePassword, changePasswordCon);

export default userRouter;
