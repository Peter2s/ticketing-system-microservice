import express from "express";
import {getCurrentUser} from "../controllers/authController";
import {currentUserMiddleware} from "../middlewares/currentUser";

const router = express.Router();

router.get('/api/users/currentUser', currentUserMiddleware,getCurrentUser);

export default router

