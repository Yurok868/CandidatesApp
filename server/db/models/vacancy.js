

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Candidate}) {
      this.hasMany(Candidate, {foreignKey: 'vacancyId'})
      // define association here
    }
  }
  Vacancy.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,

     
    },
    {
      sequelize,
      modelName: 'Vacancy',
    },
  );
  return Vacancy;
};
