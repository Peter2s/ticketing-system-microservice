import {Request,Response,NextFunction} from "express";
import {NotAuthorizedError} from "../errors/NotAuthorizedError";

export  const  requireAuthentication = (req:Request,res:Response,next:NextFunction) => {
    if (!req.currentUser)
        throw new NotAuthorizedError();

    next();

}