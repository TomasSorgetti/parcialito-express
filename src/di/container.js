// Repositories imports
import ArticleRepository from "../database/repositories/article.repository.js";
import CategoryRepository from "../database/repositories/category.repository.js";
import CommentRepository from "../database/repositories/comment.repository.js";
import UserRepository from "../database/repositories/user.repository.js";

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
    this.config = config;
    this.repositories = {};
    this.services = {};
    this.controllers = {};
    this.initializeDependencies();
  }

  initializeDependencies() {
    // Repositories instances
    this.repositories.articleRepository = new ArticleRepository(this.config);
    this.repositories.categoryRepository = new CategoryRepository(this.config);
    this.repositories.commentRepository = new CommentRepository(this.config);
    this.repositories.userRepository = new UserRepository(this.config);

    // Services instances
    this.services.articleService = new ArticleService({
      articleRepository: this.repositories.articleRepository,
    });
    this.services.categoryService = new CategoryService({
      categoryRepository: this.repositories.categoryRepository,
    });
    this.services.commentService = new CommentService({
      commentRepository: this.repositories.commentRepository,
    });
    this.services.userService = new UserService({
      userRepository: this.repositories.userRepository,
    });

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
      repositories: this.repositories,
      services: this.services,
      controllers: this.controllers,
    };
  }
}

export default Container;
