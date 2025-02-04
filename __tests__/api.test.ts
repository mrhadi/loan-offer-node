import request from 'supertest'
import expressApp from '../src/utils/expressApp'

const app = expressApp()

const sampleData = {
  firstName: "Hadi",
  lastName: "Shad",
  email: "name@domain.com",
  employmentStatus: "self-employed",
  vehiclePrice: 10000,
  deposit: 100,
  loanPurpose: "Test",
  loanTerm: 5
}

const missingSampleData = {
  firstName: "Hadi",
  lastName: "Shad",
  employmentStatus: "self-employed",
  vehiclePrice: 10000,
  deposit: 100,
  loanPurpose: "Test",
  loanTerm: 5
}

describe("GET /api/loan", () => {
  it("should return error 422 when there is no data passed", async () => {
    return request(app)
      .post('/api/loan/')
      .expect(422)
      .then((res) => {
        expect(res.statusCode).toBe(422)
      })
  })
})

describe("GET /api/loan", () => {
  it("should return 200 when passing all valid data", async () => {
    return request(app)
      .post('/api/loan/')
      .send(sampleData)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
  })
})

describe("GET /api/loan", () => {
  it("should return error 422 when missing some data", async () => {
    return request(app)
      .post('/api/loan/')
      .send(missingSampleData)
      .expect(422)
      .then((res) => {
        expect(res.statusCode).toBe(422)
      })
  })
})
