import express from "express";
import { MissingDependencyError } from "../../shared/errors/index.js";

class ArticleRouter {
  constructor({ articleController }) {
    if (!articleController) {
      throw new MissingDependencyError("ArticleController is required", {
        dependency: "ArticleController",
      });
    }
    this.router = express.Router();
    this.controller = articleController;
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/:id", this.controller.getById.bind(this.controller));
    this.router.get("/", this.controller.getAll.bind(this.controller));
    this.router.post("/", this.controller.create.bind(this.controller));
    this.router.put("/:id", this.controller.update.bind(this.controller));
    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }

  getRouter() {
    return this.router;
  }
}

export default ArticleRouter;
