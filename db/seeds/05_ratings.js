exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({resources_id: 26, user_id: 4, value: 78}),
        knex('ratings').insert({resources_id: 33, user_id: 3, value: 74}),
        knex('ratings').insert({resources_id: 19, user_id: 5, value: 15}),
        knex('ratings').insert({resources_id: 49, user_id: 3, value: 62}),
        knex('ratings').insert({resources_id: 45, user_id: 8, value: 20}),
        knex('ratings').insert({resources_id: 32, user_id: 6, value: 38}),
        knex('ratings').insert({resources_id: 8, user_id: 7, value: 69}),
        knex('ratings').insert({resources_id: 37, user_id: 8, value: 56}),
        knex('ratings').insert({resources_id: 2, user_id: 6, value: 19}),
        knex('ratings').insert({resources_id: 5, user_id: 4, value: 24}),
        knex('ratings').insert({resources_id: 13, user_id: 7, value: 7}),
        knex('ratings').insert({resources_id: 17, user_id: 5, value: 33}),
        knex('ratings').insert({resources_id: 46, user_id: 2, value: 99}),
        knex('ratings').insert({resources_id: 11, user_id: 4, value: 52}),
        knex('ratings').insert({resources_id: 2, user_id: 1, value: 24}),
        knex('ratings').insert({resources_id: 27, user_id: 7, value: 26}),
        knex('ratings').insert({resources_id: 39, user_id: 8, value: 61}),
        knex('ratings').insert({resources_id: 39, user_id: 8, value: 43}),
        knex('ratings').insert({resources_id: 23, user_id: 8, value: 64}),
        knex('ratings').insert({resources_id: 13, user_id: 4, value: 88})
      ]);
    }
  )
}

