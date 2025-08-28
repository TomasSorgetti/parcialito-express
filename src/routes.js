import express from "express";
import articleRouter from "./domains/article/article.routes.js";
import commentRouter from "./domains/comment/comment.routes.js";
import userRouter from "./domains/user/user.routes.js";

const mainRouter = express.Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/articles", articleRouter);
mainRouter.use("/comments", commentRouter);
mainRouter.use("/categories", commentRouter);

export default mainRouter;
