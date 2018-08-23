exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({name: 'Kameron', email: 'Bennie18@gmail.com'}),
        knex('users').insert({name: 'Dominique', email: 'Alivia.Wisoky71@gmail.com'}),
        knex('users').insert({name: 'Boyd', email: 'Reymundo.Grady@hotmail.com'}),
        knex('users').insert({name: 'Godfrey', email: 'Zander_Hackett@gmail.com'}),
        knex('users').insert({name: 'Christop', email: 'Orville16@hotmail.com'}),
        knex('users').insert({name: 'Destiney', email: 'Davonte_Abernathy26@yahoo.com'}),
        knex('users').insert({name: 'Justen', email: 'Felipe67@yahoo.com'}),
        knex('users').insert({name: 'Leone', email: 'Imogene42@yahoo.com'}),
        knex('users').insert({name: 'Maxie', email: 'Isaias42@yahoo.com'}),
        knex('users').insert({name: 'Helen', email: 'Erna_Franecki40@hotmail.com'})
      ]);

    }
  )
}
