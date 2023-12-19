import express from "express";
import {signOut} from "../controllers/authController";

const router = express.Router();

router.post('/api/users/signout', signOut)

export default router

