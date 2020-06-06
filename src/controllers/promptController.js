import routes from "../routes";
import Prompt from "../models/Prompt";

export const getPromptUploadCon = async (req, res) => {
  console.log(`promptUpload`);
  const today = await Prompt.find({}).sort({ _id: -1 });
  console.log(today[0]);

  res.render("promptupload", { pageTitle: "promptUpload" });
};

export const postPromptUploadCon = async (req, res) => {
  const {
    body: { prompt, pronunciation, meaning },
  } = req;
  console.log(prompt, pronunciation, meaning);
  const newPrompt = await Prompt.create({
    prompt,
    pronunciation,
    meaning,
  });
  console.log(newPrompt);
  res.redirect(routes.home);
};

export const promptCon = (req, res) => {
  console.log(`prompt`);
};

export const promptDetailCon = async (req, res) => {
  const {
    params: { id },
  } = req;
  console.log(id);
  try {
    const promptId = await Prompt.findById(id).populate(`post`);
    const posts = promptId.post;
    const today = promptId.prompt.split("");
    const pronunciation = promptId.pronunciation;
    const date = promptId.createdAt;
    const month = date.getMonth() + 1;

    res.render("postdetail", {
      pageTitle: `posttitle`,
      promptId,
      posts,
      today,
      pronunciation,
      date,
      month,
    });
  } catch (error) {
    console.log(error);
  }
};

export const listCon = async (req, res) => {
  const prompt = await Prompt.find({}).sort({ _id: -1 });
  res.render("list", { pageTitle: `promptList`, prompt });
};
