const Sequelize = require("sequelize");

class WordCloud extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.TINYINT,
          primaryKey: true,
          autoincrement: true,
        },
        teacher_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        word: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        mon: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        tue: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        wed: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        thu: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        fri: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        sat: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        sun: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "WordCloud",
        tableName: "wordclouds",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Teacher.hasOne(db.WordCloud, {
      foreignKey: "teacher_id",
    });
  }
}

module.exports = WordCloud;