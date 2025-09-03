import { MissingDependencyError } from "../../shared/errors/index.js";

class CommentController {
  constructor({ commentService }) {
    if (!commentService) {
      throw new MissingDependencyError("CommentService is required", {
        dependency: "CommentService",
      });
    }
    this.commentService = commentService;
  }

  async getById(req, res, next) {
    try {
      const comment = await this.commentService.getById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const comments = await this.commentService.getAll();
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const comment = await this.commentService.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const comment = await this.commentService.update(req.params.id, req.body);
      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await this.commentService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CommentController;
