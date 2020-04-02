
exports.up = function(knex) {
    return knex.schema.createTable('albums', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('year')
        table.string('cover')
        table.string('artist')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('albums')
};
