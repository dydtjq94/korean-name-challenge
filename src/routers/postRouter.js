import express from "express";
import routes from "../routes";
import {
  postCon,
  postDetailCon,
  editPostCon,
  deletePostCon,
  submitCon,
  listCon,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get(routes.home, postCon);
postRouter.get(routes.submit, submitCon);

postRouter.get(routes.list, listCon);
postRouter.get(routes.postDetail, postDetailCon);
postRouter.get(routes.editPost, editPostCon);
postRouter.get(routes.deletePost, deletePostCon);

export default postRouter;
