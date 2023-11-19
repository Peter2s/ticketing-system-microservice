import express, {request} from "express";
// @ts-ignore
import {singUpValidator} from  "../validators/authValidators";

const router = express.Router();

// @ts-ignore
router.post('/api/users/signup',singUpValidator, (req:request, res:Response) => {
    const {email, password} = req.body;
    console.log(email , password);
    // @ts-ignore
    res.json({email, password});
})

export default router

