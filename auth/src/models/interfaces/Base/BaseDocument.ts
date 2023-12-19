import mongoose from "mongoose";
import {TimeStamp} from "../TimeStamp";

export  interface BaseDocument extends  mongoose.Document , TimeStamp{

}