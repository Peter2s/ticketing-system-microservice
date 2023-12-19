import express from "express";
import {singUpAndSignInValidator} from "../validators/authValidators";
import {SignInController} from "../controllers/authController";

const router = express.Router();

// @ts-ignore
router.post('/api/users/signin',singUpAndSignInValidator , SignInController)

export default router

