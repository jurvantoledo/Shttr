'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.post)

      user.belongsToMany(models.user, {
        as: "following",
        through: "followUsers",
        foreignKey: "userId"
      });

      user.belongsToMany(models.user, {
        as: "follower",
        through: "followUsers",
        foreignKey: "followUserId"
      })
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};