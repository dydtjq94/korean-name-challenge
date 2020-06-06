const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const ME = "/me";

const USER = "/user";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

const POST = "/post";
const POST_DETAIL = "/:id";
const EDIT_POST = "/:id/edit";
const DELETE_POST = "/:id/delete";
const UPLOAD = "/:id";

const NATION = "/nation";
const NATION_DETAIL = "/:id";

const RANK = "/rank";

const PROMPT = "/prompt";
const LIST = "/list";
const PROMPT_DETAIL = "/:id";

// admin
const PROMPT_UPLOAD = "/prompt-upload";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,

  user: USER,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: USER_DETAIL,
  me: ME,

  post: POST,
  postDetail: (id) => {
    return id ? `/${id}` : POST_DETAIL;
  },
  editPost: EDIT_POST,
  deletePost: DELETE_POST,

  upload: (id) => {
    return id ? `/${id}` : UPLOAD;
  },

  nation: NATION,
  nationDetail: NATION_DETAIL,

  list: LIST,

  rank: RANK,

  prompt: PROMPT,

  promptDetail: (id) => {
    return id ? `/${id}` : PROMPT_DETAIL;
  },

  promptUpload: PROMPT_UPLOAD,
};

export default routes;
