"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _router = _interopRequireDefault(require("./routers/router"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // view engine pug 사용

app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views")); // static 폴더 추가하여 css, js 적용

app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use("/storage", _express["default"]["static"]("storage")); // middleware 설정

app.use((0, _helmet["default"])());
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])("dev"));

var localsMiddleWare = function localsMiddleWare(req, res, next) {
  res.locals.routes = _routes["default"];
  next();
};

app.use(localsMiddleWare); // router

app.use(_routes["default"].home, _router["default"]);
var _default = app;
exports["default"] = _default;