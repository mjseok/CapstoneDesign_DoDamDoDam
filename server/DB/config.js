require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  port: process.env.DB_Port,
  database: process.env.DB_Name,
});
connection.connect();
