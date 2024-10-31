import app from './app'
import { calculateDiscount } from './utils'
import request from 'supertest'

describe('App', () => {
    // you can use test instead of it, but it is preffered because it looks like a english sentence
    it('should return correct discount amount', () => {
        const discount = calculateDiscount(100, 10)
        expect(discount).toBe(10)
    })
    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })
})
