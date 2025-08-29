class CommentController {
  constructor({ commentService }) {
    if (!commentService) {
      throw new Error("CommentService is required");
    }
    this.commentService = commentService;
  }

  async getById(req, res) {
    try {
      const comment = await this.commentService.getById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const comments = await this.commentService.getAll();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const comment = await this.commentService.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const comment = await this.commentService.update(req.params.id, req.body);
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await this.commentService.delete(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CommentController;
