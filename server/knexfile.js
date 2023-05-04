// Update with your config settings.
const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite", //onde vai ser salvo o banco
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
  test: {
    client: "sqlite3",
    connection: ":memory:",
    migrations: {
      directory: path.join(__dirname, "src/database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src/database/seeds"),
    },
    useNullAsDefault: true,
  },
};
