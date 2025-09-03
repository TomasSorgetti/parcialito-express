import { MissingDependencyError } from "../../shared/errors/index.js";

export default class AuthController {
  constructor({ authService }) {
    if (!authService) {
      throw new MissingDependencyError("AuthService is required", {
        dependency: "AuthService",
      });
    }
    this.authService = authService;
  }

  async Login(req, res, next) {
    try {
      const users = await this.authService.Login();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async Register(req, res, next) {
    try {
      const users = await this.authService.Register();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async CheckEmail(req, res, next) {
    try {
      const users = await this.authService.CheckEmail();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async Verify(req, res, next) {
    try {
      const users = await this.authService.Verify();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async ResendVerificationCode(req, res, next) {
    try {
      const users = await this.authService.ResendVerificationCode();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async RefreshToken(req, res, next) {
    try {
      const users = await this.authService.RefreshToken();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async Logout(req, res, next) {
    try {
      const users = await this.authService.Logout();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}
