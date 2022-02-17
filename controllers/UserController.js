const { User } = require("../database/Migrations/Index");

class UserController extends User {
  constructor() {
    super();
    console.log(User);
  }

  index() {
    return this.getUsers();
  }
}

module.exports = UserController;
