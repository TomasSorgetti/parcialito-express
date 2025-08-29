class ArticleController {
  constructor({ articleService }) {
    if (!articleService) {
      throw new Error("ArticleService is required");
    }
    this.articleService = articleService;
  }

  async getById(req, res) {
    try {
      const article = await this.articleService.getById(req.params.id);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const articles = await this.articleService.getAll();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const article = await this.articleService.create(req.body);
      res.status(201).json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const article = await this.articleService.update(req.params.id, req.body);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await this.articleService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ArticleController;
