// @ts-ignore

import {MongoMemoryServer} from "mongodb-memory-server"
import mongoose from "mongoose";
import app from "../app"
import request from "supertest";

let mongo:any;

declare global {
    var signin: () => Promise<string[]>;
}
beforeAll(async ()=>{
    process.env.JWT_KEY = "hreherhrehergrwsdfgnh";
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await  mongoose.connect(uri);

})

beforeEach(async ()=>{
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections){
        await collection.deleteMany({});
    }
})

afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});



    global.signin = async ():Promise<string[]> =>{

        const response = await request(app)
            .post('/api/users/signup')
            .send({
                email:"test@example.com",
                password:"password"
            }).expect(201)
        return response.get("Set-Cookie");


    }
