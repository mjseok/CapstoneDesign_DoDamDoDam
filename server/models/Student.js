const Sequelize = require("sequelize");

class Student extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING(30),
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        teacher_id: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        number: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        birthday: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        photo: {
          type: Sequelize.BLOB,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Student",
        tableName: "students",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Teacher.hasMany(db.Student, {
      foreignKey: "teacher_id",
      sourceKey: "id",
    });
    db.Student.belongsTo(db.Teacher, {
      foreignKey: "teacher_id",
      targetKey: "id",
    });
  }
}

module.exports = Student;
