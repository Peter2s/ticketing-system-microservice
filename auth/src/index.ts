import express from 'express';
require("express-async-errors");
const morgan = require('morgan')

import currentUserRouter from "./routes/currentUser";
import signInRouter from "./routes/signin";
import signOutRouter from "./routes/signout";
import signUpRouter from "./routes/signup";
import {ErrorMiddleware} from "./middlewares/errorMiddleware";
import {NotFoundError} from "./errors/NotFoundError";

const logger = morgan("dev")
const app = express();
app.use(express.json());
app.use(logger)

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);


app.all('*' , async (req, res) => {
   throw  new NotFoundError();
});

app.use(ErrorMiddleware);


const PORT = 3000;
app.listen(PORT, function(){
   console.log("app listening on port " + PORT );
});