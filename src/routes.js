const express = require("express");
const postRouter = require("./domains/post/post.routes");
const userRouter = require("./domains/user/user.routes");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/blog", postRouter);

module.exports = mainRouter;
