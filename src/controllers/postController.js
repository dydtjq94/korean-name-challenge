import routes from "../routes";
import Post from "../models/Post";
import Prompt from "../models/Prompt";

export const homeCon = async (req, res) => {
  try {
    const prompt = await Prompt.find({}).populate("post").sort({ _id: -1 });
    const promptId = prompt[0];
    const posts = promptId.post;
    const today = promptId.prompt.split("");
    const pronunciation = promptId.pronunciation;
    const date = promptId.createdAt;
    const month = date.getMonth() + 1;

    res.render("home", {
      pageTitle: "Korean-Word",
      posts,
      promptId,
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

export const getUploadCon = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    console.log(id);
    const prompt = await Prompt.findById(id);
    console.log(prompt);

    res.render("uploadpost", { pageTitle: "postUpload", prompt });
  } catch (error) {
    console.log(error);
  }
};

export const postUploadCon = async (req, res) => {
  const {
    params: { id },
    body: { content },
  } = req;

  const prompt = await Prompt.findById(id);
  console.log(prompt);
  try {
    const newPost = await Post.create({
      content,
    });
    prompt.post.push(newPost.id);
    prompt.save();
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
};
