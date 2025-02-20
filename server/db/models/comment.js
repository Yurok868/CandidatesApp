
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Candidate}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Candidate, {foreignKey: 'candidateId'})
      // define association here
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    candidateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};