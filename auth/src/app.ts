import express from 'express';
import "express-async-errors";
import cookieSession from "cookie-session";
const morgan = require('morgan')

import currentUserRouter from "./routes/currentUser";
import signInRouter from "./routes/signin";
import signOutRouter from "./routes/signout";
import signUpRouter from "./routes/signup";
import {ErrorMiddleware} from "./middlewares/errorMiddleware";
import {NotFoundError} from "./errors/NotFoundError";

const logger = morgan("dev")
const app = express();
app.set("trust proxy",true);
app.use(express.json());
app.use(logger)
app.use(cookieSession({
    secure :process.env.NODE_ENV !== "test",
    signed:false
}))

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);


app.all('*' , async (req, res) => {
    throw  new NotFoundError();
});

app.use(ErrorMiddleware);

export default app;

