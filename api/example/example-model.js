const db = require('../../data/db-config')

module.exports = {
  getAll,
  getById,
  insert
}

function getAll() {
  return db('example')
}

function getById(id) {
  return db('example').where('id', id).first()
}

async function insert(example) {
  return db('example').insert(example)
    .then(([id]) => {
      return getById(id)
    })
}