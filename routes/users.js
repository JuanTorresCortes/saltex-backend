var express = require("express");
var router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
  validateUser,
  updateUser,
  resetPassword,
} = require("../Controllers/users");

const { validateUserData } = require("../utils/validateUserData");
const { jwtValidate } = require("../utils/jwtValidate");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// register new user
// http://localhost:4000/api/users/register-user
router.post("/register-user", validateUserData, registerUser);

// login user
// http://localhost:4000/api/users/login-user
router.post("/login-user", validateUserData, loginUser); //

router.get("/validate", jwtValidate, validateUser);

// get user by id
// http://localhost:4000/api/users//get-user-id/users-id
router.get("/get-user-id/:id", getUser);

router.put("/update-user/:userId", updateUser);

// add a way to reset password
// http://localhost:4000/api/users/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
