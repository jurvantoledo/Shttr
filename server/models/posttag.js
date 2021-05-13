'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      postTag.belongsTo(models.tag)
      postTag.belongsTo(models.post)
    }
  };
  postTag.init({
    postId: { type: DataTypes.INTEGER, allowNull: false },
    tagId: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'postTag',
  });
  return postTag;
};