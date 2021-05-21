const Sequelize = require("sequelize");

class Journal extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
          allowNull: true,
        },
        neutral: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        fear: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        anger: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        sadness: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        main_emotion: {
          type: Sequelize.STRING(10),
          allowNull: true,
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
