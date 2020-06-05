import routes from "../routes";
import Post from "../models/Post";
import Prompt from "../models/Prompt";

export const homeCon = async (req, res) => {
  try {
    const posts = await Post.find({});
    const prompt = await Prompt.find({}).sort({ _id: -1 });
    const today = prompt[0].prompt.split("");
    const pronunciation = prompt[0].pronunciation;
    const date = prompt[0].createdAt;
    const month = date.getMonth() + 1;
    res.render("home", {
      pageTitle: "Korean-Word",
      posts,
      today,
      pronunciation,
      date,
      month,
    });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Korean-Word" });
  }
};

export const postCon = (req, res) => {
  console.log(`post`);
};

export const postDetailCon = (req, res) => {
  console.log(`post detail`);
};

export const editPostCon = (req, res) => {
  console.log(`edit post`);
};

export const deletePostCon = (req, res) => {
  console.log(`delete post`);
};

export const getUploadCon = (req, res) => {
  console.log(`submit`);
  res.render("uploadpost", { pageTitle: "postUpload" });
};

export const postUploadCon = (req, res) => {
  console.log(`submit`);
  const { body } = req;
  console.log(body);
};

export const listCon = (req, res) => {
  console.log(`list`);
};
