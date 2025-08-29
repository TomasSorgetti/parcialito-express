class CategoryService {
  constructor({ categoryRepository }) {
    if (!categoryRepository) {
      throw new Error("CategoryRepository is required");
    }
    this.categoryRepository = categoryRepository;
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

export default CategoryService;
