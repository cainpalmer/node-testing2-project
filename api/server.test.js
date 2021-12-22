

const server = require('./server')
const request = require('supertest')
const db = require('../data/db-config')




beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})




describe('[GET] /example', () => {
  test('responds with all examples', async () => {
    const res = await request(server).get('/example')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(6)
  })
})

describe('[GET] /example/:id', () => {
  test('responds with Clone 01', async () => {
    const res = await request(server).get('/example/1')
    expect(res.body).toMatchObject({ id: 1, name: 'Clone 01' })
  })
})

describe('[POST] /example', () => {
  test('responds with new example', async () => {
    const res = await request(server)
      .post('/example').send({name: 'Clone 07'})
    expect(res.body).toMatchObject({id: 7, name: 'Clone 07'})
  })
})