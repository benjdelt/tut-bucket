exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function (table) {
    table.increments();
    table.integer('resources_id').references('resources.id').onDelete('CASCADE');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
};  
