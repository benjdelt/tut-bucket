exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({name: 'Kameron', email: 'Bennie18@gmail.com', avatar_url: "https://randomuser.me/api/portraits/women/79.jpg"}),
        knex('users').insert({name: 'Dominique', email: 'Alivia.Wisoky71@gmail.com', avatar_url: "https://randomuser.me/api/portraits/men/62.jpg"}),
        knex('users').insert({name: 'Boyd', email: 'Reymundo.Grady@hotmail.com', avatar_url: "https://randomuser.me/api/portraits/men/67.jpg"}),
        knex('users').insert({name: 'Godfrey', email: 'Zander_Hackett@gmail.com', avatar_url: "https://randomuser.me/api/portraits/women/58.jpg"}),
        knex('users').insert({name: 'Christop', email: 'Orville16@hotmail.com', avatar_url: "https://randomuser.me/api/portraits/women/61.jpg"}),
        knex('users').insert({name: 'Destiney', email: 'Davonte_Abernathy26@yahoo.com', avatar_url: "https://randomuser.me/api/portraits/men/83.jpg"}),
        knex('users').insert({name: 'Justen', email: 'Felipe67@yahoo.com', avatar_url: "https://randomuser.me/api/portraits/men/93.jpg"}),
        knex('users').insert({name: 'Leone', email: 'Imogene42@yahoo.com', avatar_url: "https://randomuser.me/api/portraits/women/36.jpg"}),
        knex('users').insert({name: 'Maxie', email: 'Isaias42@yahoo.com', avatar_url: "https://randomuser.me/api/portraits/men/68.jpg"}),
        knex('users').insert({name: 'Helen', email: 'Erna_Franecki40@hotmail.com', avatar_url: "https://randomuser.me/api/portraits/women/69.jpg"})
      ]);

    }
  )
}
