exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({name: 'Cooking'}),
        knex('categories').insert({name: 'Math'}),
        knex('categories').insert({name: 'Science'}),
        knex('categories').insert({name: 'Programming'}),
        knex('categories').insert({name: 'Sports'}),
        knex('categories').insert({name: 'Tech'}),
        knex('categories').insert({name: 'Photography'}),
        knex('categories').insert({name: 'Drawing'}),
        knex('categories').insert({name: 'Music'}),
        knex('categories').insert({name: 'History'}),
        knex('categories').insert({name: 'Business'}),
        knex('categories').insert({name: 'Finance'}),
        knex('categories').insert({name: 'Gaming'}),
        knex('categories').insert({name: 'Makeup'}),
        knex('categories').insert({name: 'Fashion'}),
        knex('categories').insert({name: 'Health'}),
        knex('categories').insert({name: 'DIY'}),
        knex('categories').insert({name: 'Graphic Design'}),
        knex('categories').insert({name: 'Languages'}),
        knex('categories').insert({name: 'Psychology'})
      ]);
    }
  )
}
