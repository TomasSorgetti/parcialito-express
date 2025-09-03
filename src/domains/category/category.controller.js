import { MissingDependencyError } from "../../shared/errors/index.js";

class CategoryController {
  constructor({ categoryService }) {
    if (!categoryService) {
      throw new MissingDependencyError("CategoryService is required", {
        dependency: "CategoryService",
      });
    }
    this.categoryService = categoryService;
  }

  async getById(req, res, next) {
    try {
      const category = await this.categoryService.getById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const categories = await this.categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const category = await this.categoryService.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const category = await this.categoryService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await this.categoryService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
