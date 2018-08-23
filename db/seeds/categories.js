exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({name: 'Cooking'}),
        knex('users').insert({name: 'Math'}),
        knex('users').insert({name: 'Science'}),
        knex('users').insert({name: 'Programming'}),
        knex('users').insert({name: 'Sports'}),
        knex('users').insert({name: 'Tech'}),
        knex('users').insert({name: 'Photography'}),
        knex('users').insert({name: 'Drawing'}),
        knex('users').insert({name: 'Music'}),
        knex('users').insert({name: 'History'}),
        knex('users').insert({name: 'Business'}),
        knex('users').insert({name: 'Finance'}),
        knex('users').insert({name: 'Gaming'}),
        knex('users').insert({name: 'Makeup'}),
        knex('users').insert({name: 'Fashion'}),
        knex('users').insert({name: 'Health'}),
        knex('users').insert({name: 'DIY'}),
        knex('users').insert({name: 'Graphic Design'}),
        knex('users').insert({name: 'Languages'}),
        knex('users').insert({name: 'Psychology'})
      ]);
    }
  )
}
