import request from "supertest"
import  app from "../../app"
it("clear the cookie after signing out", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"password"
        }).expect(201)

   const res =  await request(app)
        .post('/api/users/signout')
        .send({}).expect(201)
        .expect(200)
    expect(res.get("Set-Cookie")).toBeUndefined();


})
