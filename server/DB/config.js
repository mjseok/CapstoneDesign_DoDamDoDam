require("dotenv").config();
const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  port: process.env.DB_Port,
  database: process.env.DB_Name,
});
module.exports = connection;
