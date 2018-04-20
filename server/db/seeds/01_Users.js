
/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/

const crypto = require('crypto');

var encrypt = function(password){
  return crypto.pbkdf2Sync(password, 'salt', 10, 512, 'sha512')
  .toString('base64');
};



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'willshep32', email: 'willshepp32@gmail.com', password: encrypt('444')},
        { username: 'tiffany', email: 'tiffanysWorld@gmail.com', password: encrypt('555')},
        { username: 'kenny', email: 'bigmoney76@outlook.com', password: encrypt('yup12')}
      ]);
    });
};

