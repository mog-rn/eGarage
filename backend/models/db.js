const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Connection to the database
const connection = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// Open the MySQL connection
connection.getConnection((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database...");
});

module.exports = connection;
