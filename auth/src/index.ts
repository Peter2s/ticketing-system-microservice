import express from 'express';
const morgan = require('morgan')

import currentUserRouter from "./routes/currentUser";
import signInRouter from "./routes/signin";
import signOutRouter from "./routes/signout";
import signUpRouter from "./routes/signup";

const logger = morgan("dev")
const app = express();
app.use(express.json());
app.use(logger)

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);


const PORT = 3000;
app.listen(PORT, function(){
   console.log("app listening on port " + PORT );
});