import {NextFunction} from "express";
import {RequestValidationErrors} from "../errors/RequestValidationErrors";

const { validationResult } = require("express-validator");
/*
 * @description  Finds the validation errors in this request and wraps them in an object with handy functions
 */
export  const  validatorMiddleware = (req:Request, res:Response, next:NextFunction): void=> {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
       next(new  RequestValidationErrors(errors.array()));
    }

    next();
};