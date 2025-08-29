import express from "express";
import ArticleRouter from "../domains/article/article.routes.js";
import CategoryRouter from "../domains/category/category.routes.js";
import CommentRouter from "../domains/comment/comment.routes.js";
import UserRouter from "../domains/user/user.routes.js";

class MainRouter {
  constructor(dependencies = {}) {
    this.router = express.Router();
    this.setupRoutes(dependencies);
  }

  setupRoutes(dependencies) {
    const articleRouter = new ArticleRouter({
      articleController: dependencies.controllers.articleController,
    });
    const categoryRouter = new CategoryRouter({
      categoryController: dependencies.controllers.categoryController,
    });
    const commentRouter = new CommentRouter({
      commentController: dependencies.controllers.commentController,
    });
    const userRouter = new UserRouter({
      userController: dependencies.controllers.userController,
    });

    this.router.use("/articles", articleRouter.getRouter());
    this.router.use("/categories", categoryRouter.getRouter());
    this.router.use("/comments", commentRouter.getRouter());
    this.router.use("/users", userRouter.getRouter());
  }

  getRouter() {
    return this.router;
  }
}

export default MainRouter;
