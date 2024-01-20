import {User} from "../models/User";
import {BasRequestError} from "../errors/BasRequestError";
import jwt from "jsonwebtoken"
import {Password} from "../services/Password";
import {Request,Response} from "express"

export  const signUpController =  async (req:Request, res:Response) => {
    const {email,password} = req.body;
    const existingUser = await User.findOne({ email})
    if (existingUser)
        throw new BasRequestError("User already exists");

    const user =  await  User.build({ email, password});
    await user.save();
    const userToken =   jwt.sign({ id:user.id , email:user.email },process.env.JWT_KEY!);


    req.session = {jwt:userToken}
    res.status(201).json({ user})
}

export  const SignInController = async (req: Request, res: Response)=>{
    const {email,password} = req.body;
    const existingUser = await User.findOne({ email})
    if (!existingUser)
        throw new BasRequestError("User not exists");

    const passwordMatch = await Password.compare(existingUser.password,password);

    if (!passwordMatch)
        throw new BasRequestError("Invalid password");

    const userToken =   jwt.sign({ id:existingUser.id,email:existingUser.email },process.env.JWT_KEY!);
    req.session = {jwt:userToken}
    res.status(200).json({ existingUser})

}

export  const  getCurrentUser = (req: Request, res: Response)   => {
    return  res.status(200).json({currentUser : req.currentUser || null})
}
export  const signOut = (req: Request, res: Response) => {

    req.session = null;
    res.status(200).json({})
}