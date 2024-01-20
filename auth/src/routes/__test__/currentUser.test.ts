import request from "supertest"
import  app from "../../app"
it("responses with current user details ", async () => {


    const cookie = await  global.signin();
    const res =  await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .expect(200)
    expect(res.body.currentUser.email).toEqual("test@example.com");


})