exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('directors', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('country');
      table.integer('age');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('movies', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('releaseDate');
      table.string('director');
      table.integer('directorsId').unsigned();
      table.foreign('directorsId').references('directorId');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('directors'),
    knex.schema.dropTable('movies')
  ])
};
