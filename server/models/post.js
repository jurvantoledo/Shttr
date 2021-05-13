'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.user);
      post.belongsToMany(models.tag, {
        through: "postTags",
        foreignKey: "postId",
      });
    }
  };
  post.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};