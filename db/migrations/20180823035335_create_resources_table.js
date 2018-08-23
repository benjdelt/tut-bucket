exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', function (table) {
    table.increments();
    table.string('url');
    table.string('title');
    table.text('description');
    table.string('image_url');
    table.timestamp('timestamp');
    table.integer('category_id').references('categories.id');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};