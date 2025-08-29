class UserController {
  constructor({ userService }) {
    if (!userService) {
      throw new Error("UserService is required");
    }
    this.userService = userService;
  }

  async getAll(req, res) {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
