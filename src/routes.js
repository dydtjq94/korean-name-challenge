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
const SUBMIT = "/submit";

const NATION = "/nation";
const NATION_DETAIL = "/:id";
const LIST = "/list";

const RANK = "/rank";

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
  postDetail: POST_DETAIL,
  editPost: EDIT_POST,
  deletePost: DELETE_POST,
  submit: SUBMIT,

  nation: NATION,
  nationDetail: NATION_DETAIL,

  list: LIST,

  rank: RANK,
};

export default routes;
