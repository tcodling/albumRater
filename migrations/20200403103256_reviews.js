
exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments('id').primary()
        table.integer('rating')
        table.string('comment')
        table.integer('album_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('reviews')
};
