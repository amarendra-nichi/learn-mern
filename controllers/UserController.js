const { User } = require("../database/Migrations/Index");

class UserController extends User {
  constructor() {
    super();
    console.log(User);
  }

  async userByRole(req, res) {
    try {
      const getUser = await User.find().byRole(
        req.params.userType || req.body.role
      );
      res.json({ user: getUser, msg: "users by " + req.body.role + " role" });
    } catch (e) {
      console.log(e.message);
    }

    // User.where("age")
    //   .gt(18)
    //   .lt(62)
    //   .where("name")
    //   .equals("Amar")
    //   .limit(3)
    //   .select(["name", "age"]);
  }
}

module.exports = UserController;
