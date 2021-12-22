
exports.up = function(knex) {
    return knex.schema.createTable('example', tbl => {
        tbl.increments()
        tbl.string('name', 128).unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('example')
};
