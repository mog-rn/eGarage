const { check } = require("express-validator");

exports.registerValidation = [
  check("name", "Name is required").not().isEmpty(),
  check("user_name", "Please enter a valid username").not().isEmpty(),
  check("first_name").not().isEmpty(),
  check("last_name").not().isEmpty(),
  check("email", "Please include a valid email...")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
  check("confirm_password", "The passwords do not match!")
];

exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "password must be 6 or more characters").isLength({
    min: 6,
  }),
];
