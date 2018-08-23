exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({resource_id: 26, user_id: 4, value: 78}),
        knex('likes').insert({resource_id: 33, user_id: 3, value: 74}),
        knex('likes').insert({resource_id: 19, user_id: 5, value: 15}),
        knex('likes').insert({resource_id: 59, user_id: 3, value: 62}),
        knex('likes').insert({resource_id: 45, user_id: 8, value: 20}),
        knex('likes').insert({resource_id: 32, user_id: 6, value: 38}),
        knex('likes').insert({resource_id: 8, user_id: 7, value: 69}),
        knex('likes').insert({resource_id: 37, user_id: 8, value: 56}),
        knex('likes').insert({resource_id: 2, user_id: 6, value: 19}),
        knex('likes').insert({resource_id: 5, user_id: 4, value: 24}),
        knex('likes').insert({resource_id: 13, user_id: 7, value: 7}),
        knex('likes').insert({resource_id: 17, user_id: 5, value: 33}),
        knex('likes').insert({resource_id: 46, user_id: 2, value: 99}),
        knex('likes').insert({resource_id: 11, user_id: 4, value: 52}),
        knex('likes').insert({resource_id: 2, user_id: 1, value: 24}),
        knex('likes').insert({resource_id: 27, user_id: 7, value: 26}),
        knex('likes').insert({resource_id: 39, user_id: 8, value: 61}),
        knex('likes').insert({resource_id: 39, user_id: 8, value: 43}),
        knex('likes').insert({resource_id: 23, user_id: 8, value: 64}),
        knex('likes').insert({resource_id: 13, user_id: 4, value: 88})
      ]);
    }
  )
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
