const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const initialize = async () => {
  const { host, port, username, password, database } = config;
  try {
    const pool = await mysql.createPool({
      host,
      port,
      user: username,
      password,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    await pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  } catch (e) {
    console.error(e);
  }

  let sequelize;
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
<<<<<<< HEAD
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
=======
    sequelize = new Sequelize(config.database, config.username, config.password, config);
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
  }

  fs.readdirSync(__dirname)
    .filter((file) => {
<<<<<<< HEAD
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
=======
      return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file));
      db[model.name] = model.init(sequelize);
    });

  Object.keys(db).forEach((modelName) => {
    if (typeof db[modelName].associate === "function") {
      db[modelName].associate(db);
    }
  });

  try {
    await sequelize.sync({ force: false });
    console.log("데이터베이스 연결 성공");
  } catch (e) {
    console.error(err);
  }

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
};

initialize();

module.exports = db;
