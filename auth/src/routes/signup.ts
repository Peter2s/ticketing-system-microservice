import express from "express";
import {singUpAndSignInValidator} from  "../validators/authValidators";
import {signUpController} from "../controllers/authController";

const router = express.Router();

// @ts-ignore
router.post('/api/users/signup',singUpAndSignInValidator, signUpController);

export default router

