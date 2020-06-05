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
