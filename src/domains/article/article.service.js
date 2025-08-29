class ArticleService {
  constructor({ articleRepository }) {
    if (!articleRepository) {
      throw new Error("ArticleRepository is required");
    }
    this.articleRepository = articleRepository;
  }

  async getById(id) {
    return { msg: "NOT_IMPLEMENTED" };
  }

  async getAll() {
    return { msg: "NOT_IMPLEMENTED" };
  }

  async create(data) {
    return { msg: "NOT_IMPLEMENTED" };
  }

  async update(id, data) {
    return { msg: "NOT_IMPLEMENTED" };
  }

  async delete(id) {
    return { msg: "NOT_IMPLEMENTED" };
  }
}

export default ArticleService;
