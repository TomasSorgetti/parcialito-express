class CategoryController {
  constructor({ categoryService }) {
    if (!categoryService) {
      throw new Error("CategoryService is required");
    }
    this.categoryService = categoryService;
  }

  async getById(req, res) {
    try {
      const category = await this.categoryService.getById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const categories = await this.categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const category = await this.categoryService.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const category = await this.categoryService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await this.categoryService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CategoryController;
