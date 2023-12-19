import {check} from "express-validator";
import {validatorMiddleware} from "../middlewares/validatorMiddleware"

export const singUpAndSignInValidator = [
    check("email")
        .notEmpty()
        .withMessage("user email required")
        .isEmail()
        .withMessage("invalid email format"),
    check("password")
        .isString()
        .withMessage("password is required")
        .trim()
        .isLength({ min: 8 })
        .withMessage("user password required and minimum length must be 8 "),
    validatorMiddleware
    ];

