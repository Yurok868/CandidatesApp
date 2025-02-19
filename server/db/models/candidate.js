'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Vacancy}) {
      this.belongsTo(Vacancy, {foreignKey: 'vacancyId'})
      // define association here
    }
  }
  Candidate.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    status: DataTypes.ENUM,
    vacancyId: DataTypes.INTEGER,
    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};