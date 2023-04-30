exports.up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("genre").notNullable();
    table.string("author").notNullable();
    table.string("image").notNullable();
    table.integer("price").notNullable();
    table.float("rating").notNullable();
    table.text("synopsis").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
