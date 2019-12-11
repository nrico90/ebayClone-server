const Sequelize = require("sequelize");
const Advertisement = require("./ads/model");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("Database connected"))
  .catch(console.error);

module.exports = db;
