import express from "express";
import { MissingDependencyError } from "../../shared/errors/index.js";

class UserRouter {
  constructor({ userController }) {
    if (!userController) {
      throw new MissingDependencyError("UserController is required", {
        dependency: "UserController",
      });
    }
    this.router = express.Router();
    this.controller = userController;
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", this.controller.getAll.bind(this.controller));
  }

  getRouter() {
    return this.router;
  }
}

export default UserRouter;
