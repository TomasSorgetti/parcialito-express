import express from "express";
import { MissingDependencyError } from "../../shared/errors/index.js";
import LoginInputValidation from "./validations/login.validation.js";

export default class AuthRouter {
  constructor({ authController }) {
    if (!authController) {
      throw new MissingDependencyError("authController is required", {
        dependency: "authController",
      });
    }
    this.router = express.Router();
    this.controller = authController;
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post(
      "/login",
      new LoginInputValidation().middleware(),
      this.controller.Login.bind(this.controller)
    );
  }

  getRouter() {
    return this.router;
  }
}
