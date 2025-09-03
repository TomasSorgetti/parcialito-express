import { body } from "express-validator";
import ValidationMiddleware from "../../../shared/middlewares/validation.middleware.js";

export default class LoginInputValidation extends ValidationMiddleware {
  constructor() {
    super([
      body("email")
        .isEmail()
        .withMessage("The email must be a valid email address"),
      body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 5 })
        .withMessage("The password must be at least 5 characters long"),
    ]);
  }
}
