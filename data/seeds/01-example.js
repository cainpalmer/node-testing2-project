const example = [
    { name: 'Clone 01'},
    { name: 'Clone 02'},
    { name: 'Clone 03'},
    { name: 'Clone 04'},
    { name: 'Clone 05'},
    { name: 'Clone 06'}
  ]
  
  exports.seed = function(knex, Promise) {
    return knex('example')
      .truncate()
      .then(function() {
        return knex('example').insert(example)
      })
  }
  
  exports.example = example