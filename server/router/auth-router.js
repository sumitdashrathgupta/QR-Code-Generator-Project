const express = require("express");
const router = express.Router();
const authcontrolers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");

router.route("/").get(authcontrolers.home);

router.route("/register").post(validate(signupSchema), authcontrolers.register);
router.route("/login").post(authcontrolers.login);

module.exports = router;
