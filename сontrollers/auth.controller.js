const jwt = require("jsonwebtoken");
const existingUser = require("../models/mock-user");
const authConfig = require("../config/auth");

class AuthController {
  static auth (req, res) {
    const credentials = req.body;

    if (
      credentials.login !== existingUser.username ||
      credentials.password !== existingUser.password
    ) {
      res.status(401).send({
        code: 401,
        success: false,
        message: "bad username/password combination"
      });

      return;
    }

    const payload = { email: existingUser.email };
    const token = jwt.sign(payload, authConfig.secretKey, { expiresIn: 10 });
    res.send({
      code: 200,
      message: "OK",
      data: {
        user: {
          email: existingUser.email,
          username: existingUser.username
        }
      },
      token
    });
  }
}

module.exports = AuthController;
