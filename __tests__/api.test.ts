import request from 'supertest'
import expressApp from '../src/utils/expressApp'

const app = expressApp()

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
