import express from "express";
import routes from "../routes";
import {
  postCon,
  postDetailCon,
  editPostCon,
  deletePostCon,
  getUploadCon,
  postUploadCon,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get(routes.home, postCon);
postRouter.get(routes.upload(), getUploadCon);
postRouter.post(routes.upload(), postUploadCon);

postRouter.get(routes.postDetail(), postDetailCon);
postRouter.get(routes.editPost, editPostCon);
postRouter.get(routes.deletePost, deletePostCon);

export default postRouter;
