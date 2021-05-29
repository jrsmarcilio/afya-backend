require("dotenv/config");

module.exports = {
  dialect: "postgres",
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
