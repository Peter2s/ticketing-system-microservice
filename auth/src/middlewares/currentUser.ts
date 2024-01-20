import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

interface IUserPayload {
    id: string;
    email: string;
}
declare global {
    namespace  Express {
        interface Request {
            currentUser?:IUserPayload;
        }
    }
}
export  const currentUserMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    if(!req.session?.jwt)
       return next();

    try{
        req.currentUser = jwt.verify(req.session?.jwt, process.env.JWT_KEY!) as IUserPayload;
        next();
    }catch (err){
        next();
    }

}