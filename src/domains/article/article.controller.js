import { MissingDependencyError } from "../../shared/errors/index.js";

class ArticleController {
  constructor({ articleService }) {
    if (!articleService) {
      throw new MissingDependencyError("ArticleService is required", {
        dependency: "ArticleService",
      });
    }
    this.articleService = articleService;
  }

  async getById(req, res, next) {
    try {
      const article = await this.articleService.getById(req.params.id);
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const articles = await this.articleService.getAll();
      res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const article = await this.articleService.create(req.body);
      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const article = await this.articleService.update(req.params.id, req.body);
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await this.articleService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default ArticleController;
