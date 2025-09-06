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
  
  async create(data) {
    return await this.userRepository.create(data);
  }
}

export default UserService;
