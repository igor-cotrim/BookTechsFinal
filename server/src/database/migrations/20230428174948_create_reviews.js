exports.up = function (knex) {
  return knex.schema.createTable("reviews", function (table) {
    table.increments("id").primary();
    table.integer("book_id").unsigned().references("id").inTable("books");
    table.string("name");
    table.text("comment");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
