import express from "express";
import { MissingDependencyError } from "../../shared/errors/index.js";

class CommentRouter {
  constructor({ commentController }) {
    if (!commentController) {
      throw new MissingDependencyError("commentController is required", {
        dependency: "commentController",
      });
    }
    this.router = express.Router();
    this.controller = commentController;
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

export default CommentRouter;
