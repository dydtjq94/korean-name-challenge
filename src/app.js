import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import postRouter from "./routers/postRouter";
import nationRouter from "./routers/nationRouter";
import path from "path";

const app = express();

// view engine pug 사용
app.set(`view engine`, "pug");
app.set("views", path.join(__dirname, "views"));

// static 폴더 추가하여 css, js 적용
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/storage", express.static("storage"));

// middleware 설정
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const localsMiddleWare = (req, res, next) => {
  res.locals.routes = routes;
  next();
};

app.use(localsMiddleWare);

// global-router
app.use(routes.home, globalRouter);

// user-router
app.use(routes.user, userRouter);

// post-router
app.use(routes.post, postRouter);

// nation-router
app.use(routes.nation, nationRouter);

export default app;
