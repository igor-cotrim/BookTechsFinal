// Update with your config settings.

module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite", //onde vai ser salvo o banco
  },
  migrations: {
    directory: "./src/database/migrations",
  },
  useNullAsDefault: true,
};
