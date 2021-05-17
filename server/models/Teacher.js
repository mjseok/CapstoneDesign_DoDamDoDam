const Sequelize = require('sequelize');

class Teacher extends Sequelize.Model {
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
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        school: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        grade: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        class: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Teacher',
        tableName: 'teachers',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {}
}

module.exports = Teacher;
