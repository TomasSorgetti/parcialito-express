class UserService {
  constructor({ userRepository }) {
    if (!userRepository) {
      throw new Error("UserRepository is required");
    }
    this.userRepository = userRepository;
  }

  async getAll() {
    return await this.userRepository.findAll();
  }
}

export default UserService;
