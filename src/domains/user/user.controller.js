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

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      res.status(200).json({ user: { email, password } });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
