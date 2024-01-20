import mongoose from 'mongoose';
import app from './app'

const DBConnection = async  () => {
 try {
    await mongoose.connect("mongodb://auth-mongo-sev:27017/auth");
    console.log("Connected to MongoDB")
 }catch (err){
    console.error(err);
 }
}
const startApp = () => {

    if (!process.env.JWT_KEY)
        throw new Error("JWT_KEY must be defined");

    const PORT = 3000;
    app.listen(PORT, function(){
        console.log("app listening on port " + PORT );
    });
    DBConnection();
}
startApp();
