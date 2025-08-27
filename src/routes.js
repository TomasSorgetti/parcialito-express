const express = require("express");
const articleRouter = require("./domains/article/article.routes");
const commentRouter = require("./domains/comment/comment.routes");
const userRouter = require("./domains/user/user.routes");

const mainRouter = express.Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/articles", articleRouter);
mainRouter.use("/comments", commentRouter);
mainRouter.use("/categories", commentRouter);

module.exports = mainRouter;
