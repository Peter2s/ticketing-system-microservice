import {Request,Response,NextFunction} from "express";
import {CustomError} from "../errors/CustomError";

export const ErrorMiddleware = (error:Error, req:Request, res:Response, next:NextFunction) => {
    if (error  instanceof CustomError){
         return res.status(error.statusCode).json({errors : error.serializeErrors()});
    }
    return  res.status(500).json({errors:`internal server error : ${error.message}`})
}
