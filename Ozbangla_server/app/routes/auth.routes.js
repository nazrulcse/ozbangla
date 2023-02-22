const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middleware");
const { validator } = require("../middleware");


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) 

router.post("/signup",[validator.signupValidation,verifySignUp.checkDuplicateEmail],authController.signup);
router.post("/signin",[validator.signinValidation],authController.signin);

module.exports = router