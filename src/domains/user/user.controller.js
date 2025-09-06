import { MissingDependencyError } from "../../shared/errors/index.js";

class UserController {
  constructor({ userService }) {
    if (!userService) {
      throw new MissingDependencyError("UserService is required", {
        dependency: "UserService",
      });
    }
    this.userService = userService;
  }

  async getAll(req, res, next) {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { username, email, password } = req.body;

      await this.userService.create({
        username,
        email,
        password,
      });
      res.status(201).json({ status: "ok", message: "User created" });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
