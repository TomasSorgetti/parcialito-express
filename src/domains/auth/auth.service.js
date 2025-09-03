export default class AuthService {
  constructor({
    userRepository
  }) {
    if (!userRepository) {
      throw new Error("UserRepository is required");
    }
    this.userRepository = userRepository;
  }

  async Login() {
    return "NOT_IMPLEMENTED";
  }

  async Register() {
    return "NOT_IMPLEMENTED";
  }

  async CheckEmail() {
    return "NOT_IMPLEMENTED";
  }

  async Verify() {
    return "NOT_IMPLEMENTED";
  }

  async ResendVerificationCode() {
    return "NOT_IMPLEMENTED";
  }

  async RefreshToken() {
    return "NOT_IMPLEMENTED";
  }

  async Logout() {
    return "NOT_IMPLEMENTED";
  }
}
