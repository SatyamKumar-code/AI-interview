const { Router } = require("express");
const { registerUserController, loginUserController, logoutUserController, getMeController } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = Router();

authRouter.post("/register", registerUserController);

/**
 * @route Post /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login", loginUserController)

/**
 * @route Post /api/auth/logout
 * @description clear token from user and add token to blacklist
 * @access Public
 */
authRouter.get("/logout", logoutUserController)

/**
 * @route Get /api/auth/get-me
 * @description get the logged in user details
 */
authRouter.get("/get-me", authMiddleware.authUser, getMeController ); 

module.exports = authRouter;