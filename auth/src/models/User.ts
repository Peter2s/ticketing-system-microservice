import mongoose from "mongoose";
import {BaseDocument} from "./interfaces/Base/BaseDocument";
import {Password} from "../services/Password";

interface IUserAttributes {
    email : String,
    password : String
}
interface  UserModel extends mongoose.Model<any>{
    build(attrs: IUserAttributes):UserDocument;
}
export interface UserDocument extends BaseDocument{
    email : String,
    password : String
}
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    toJSON:{
        transform(doc,ret){
            ret.id = doc._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;

        }
    }
})
userSchema.pre("save", async  function(commmit)  {
    if(this.isModified("password")){
        const hashedPassword = await  Password.HashPassword(this.get("password"));
        this.set("password", hashedPassword);
        commmit();
    }
})

userSchema.statics.build = (userAttributes:IUserAttributes) => {
    return new User(userAttributes);
}
const User = mongoose.model<UserDocument,UserModel>('User',userSchema);
export {User};

