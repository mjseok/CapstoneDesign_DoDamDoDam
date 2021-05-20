const Sequelize = require("sequelize");

class Journal extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.TINYINT,
          primaryKey: true,
          autoincrement: true,
        },
        student_id: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        teacher_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        contents: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        happy: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        neutral: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        fear: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        anger: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        sadness: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        main_emotion: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Journal",
        tableName: "journals",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Student.hasOne(db.Journal, {
      foreignKey: "student_id",
    });
    db.Teacher.hasOne(db.Journal, {
      foreignKey: "teacher_id",
    });
  }
}

module.exports = Journal;
