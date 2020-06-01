import routes from "../routes";

export const homeCon = (req, res) => {
  res.render("home");
  console.log(`home`);
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

export const submitCon = (req, res) => {
  console.log(`submit`);
};

export const listCon = (req, res) => {
  console.log(`list`);
};
