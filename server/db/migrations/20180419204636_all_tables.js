
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments();
          table.string('username').notNullable();
          table.text('profilePic').notNullable().defaultTo('data:image/jpeg;base64,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');
          table.string('email').notNullable();
          table.text('password').notNullable();
          table.timestamp('date_joined').defaultTo(knex.fn.now());
      })
      .createTable('post', (table) => {
          table.increments();
          table.text('photo').notNullable();
          table.text('caption');
          table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
      });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('post').dropTable('users');
  };
  
  