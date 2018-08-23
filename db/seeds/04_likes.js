exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({resources_id: 26, user_id: 4}),
        knex('likes').insert({resources_id: 33, user_id: 3}),
        knex('likes').insert({resources_id: 19, user_id: 5}),
        knex('likes').insert({resources_id: 49, user_id: 3}),
        knex('likes').insert({resources_id: 45, user_id: 8}),
        knex('likes').insert({resources_id: 32, user_id: 6}),
        knex('likes').insert({resources_id: 8, user_id: 7}),
        knex('likes').insert({resources_id: 37, user_id: 8}),
        knex('likes').insert({resources_id: 2, user_id: 6}),
        knex('likes').insert({resources_id: 5, user_id: 4}),
        knex('likes').insert({resources_id: 13, user_id: 7}),
        knex('likes').insert({resources_id: 17, user_id: 5}),
        knex('likes').insert({resources_id: 46, user_id: 2}),
        knex('likes').insert({resources_id: 11, user_id: 4}),
        knex('likes').insert({resources_id: 2, user_id: 1}),
        knex('likes').insert({resources_id: 27, user_id: 7}),
        knex('likes').insert({resources_id: 39, user_id: 8}),
        knex('likes').insert({resources_id: 39, user_id: 8}),
        knex('likes').insert({resources_id: 23, user_id: 8}),
        knex('likes').insert({resources_id: 13, user_id: 4})
      ]);
    }
  )
}
