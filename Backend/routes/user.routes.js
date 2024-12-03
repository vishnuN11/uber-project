const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const { registerUser, loginUser, getUserProfile, logoutUser } = require("../controller/user.controller")
const { authUser } = require("../middleware/auth.middleware")

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters longs"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 character long")

], registerUser)
router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 character long")

],loginUser)
router.get('/profile',authUser,getUserProfile)
router.get('/logout',authUser,logoutUser)
module.exports = router
