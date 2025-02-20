
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
    static associate({Vacancy,User,Comment}) {
      // this.belongsTo(Vacancy, {foreignKey: 'vacancyId'})
      // this.belongsTo(User, {foreignKey: 'userId'})
      this.hasMany(Comment, {foreignKey: 'candidateId'})
      // define association here
    }
  }
  Candidate.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    status: DataTypes.STRING,
  
  
   

    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};