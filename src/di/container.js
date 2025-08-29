// Services imports
import ArticleService from "../domains/article/article.service.js";
import CategoryService from "../domains/category/category.service.js";
import CommentService from "../domains/comment/comment.service.js";
import UserService from "../domains/user/user.service.js";

// Controllers imports
import ArticleController from "../domains/article/article.controller.js";
import CategoryController from "../domains/category/category.controller.js";
import CommentController from "../domains/comment/comment.controller.js";
import UserController from "../domains/user/user.controller.js";

class Container {
  constructor(config = {}) {
    this.services = {};
    this.controllers = {};
    this.config = config;
    this.initializeDependencies();
  }

  initializeDependencies() {
    // Services instances
    this.services.articleService = new ArticleService(this.config);
    this.services.categoryService = new CategoryService(this.config);
    this.services.commentService = new CommentService(this.config);
    this.services.userService = new UserService(this.config);

    // Controllers instances
    this.controllers.articleController = new ArticleController({
      articleService: this.services.articleService,
    });
    this.controllers.categoryController = new CategoryController({
      categoryService: this.services.categoryService,
    });
    this.controllers.commentController = new CommentController({
      commentService: this.services.commentService,
    });
    this.controllers.userController = new UserController({
      userService: this.services.userService,
    });
  }

  getDependencies() {
    return {
      services: this.services,
      controllers: this.controllers,
    };
  }
}

export default Container;
