class CommentService {
  constructor({ commentRepository }) {
    if (!commentRepository) {
      throw new Error("CommentRepository is required");
    }
    this.commentRepository = commentRepository;
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

export default CommentService;
