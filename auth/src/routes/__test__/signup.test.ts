import request from "supertest"
import  app from "../../app"

it("should return status code 201 on success", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"password"
        }).expect(201)
})


it("should return status code 400 with invalid email", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"regergregergergerg",
            password:"password"
        }).expect(400)
})

it("should return status code 400 with invalid password", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"pa"
        }).expect(400)
})

it("should return status code 400 no password", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
        }).expect(400)
})

it("should return status code 400 no email", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            password:"password"
        }).expect(400)
})

it("check if email already exist", async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"password"
        }).expect(201)

    await request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"password"
        }).expect(400)
})

it("set a cooke after  success sginup", async () => {
    const res = await request(app)
        .post('/api/users/signup')
        .send({
            email:"test@example.com",
            password:"password"
        }).expect(201)

    expect(res.get("Set-Cookie")).toBeDefined();



})





