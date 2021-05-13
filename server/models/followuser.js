'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class followUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      followUser.belongsTo(models.user);
    }
  };
  followUser.init({
    userId: { type: DataTypes.INTEGER, allowNull: false },
    followUserId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'followUser',
  });
  return followUser;
};