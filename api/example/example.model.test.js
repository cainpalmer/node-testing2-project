const Example = require('./example-model')
const db = require('../../data/db-config')
const {example} = require('../../data/seeds/01-example')



test('sanity check', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

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



describe('Example Model', () => {
  describe('getAll()', () => {
    let data
    beforeEach(async () => {
      data = await Example.getAll()
    })
    test('gets all example from db', async () => {
      expect(data.length).toBe(6)
      expect(data).toHaveLength(6)
    })
  })
  describe('getById()', () => {
    test('returns the correct example', async () => {
      const data = await Example.getById('1')
      expect(data).toMatchObject({id: 1, name: 'Clone 01'})
    })
  })
})