

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        { photo: 'https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/field/image/transformation/shaun-dillon.jpg?itok=sAbJLLBl', caption: 'This made my morning. Iam am truly inspired', user_id: 1},
        { photo: 'http://static.boredpanda.com/blog/wp-content/uploads/2017/05/before-after-body-building-fitness-transformation-81-591bf686b587b__700.jpg', caption: 'This is how i want my man to be. Nice and Fit', user_id:2},
        { photo: 'https://i.pinimg.com/736x/80/ca/10/80ca10da9e42242f93dec10e104e4ac5--a-thought-fitness-workouts.jpg', caption: 'Chicks with 6 packs run the world', user_id: 3 }
      ]);
    });
};
