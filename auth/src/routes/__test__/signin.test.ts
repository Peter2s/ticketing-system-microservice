import request from "supertest"
import  app from "../../app"


it("fails when email not found", async () => {
    return request(app)
        .post("/api/users/signin")
        .send({
            email: "test@example.com",
            password: "password"
        })
        .expect(400)
})

it("fails when password incorrect", async () => {
    await request(app)
        .post("/api/users/signup")
        .send({
            email: "test@example.com",
            password: "password"
        })
        .expect(201)

    await  request(app)
        .post("/api/users/signin")
        .send({
            email: "test@example.com",
            password: "passwordd"
        })
        .expect(400)
})

it("success when email and password valid", async () => {
    await request(app)
        .post("/api/users/signup")
        .send({
            email: "test@example.com",
            password: "password"
        })
        .expect(201)

    const res = await  request(app)
        .post("/api/users/signin")
        .send({
            email: "test@example.com",
            password: "password"
        })
        .expect(200)

    expect(res.get("Set-Cookie")).toBeDefined();
})