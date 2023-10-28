'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.poster, {
        foreignKey: 'posterId',
        as: 'poster',
      });
    }
  }
  post.init(
    {
      name: DataTypes.STRING,
      post: DataTypes.TEXT,
      score: DataTypes.FLOAT,
      posterId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'poster',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'post',
      freezeTableName: true,
      underscored: true,
      paranoid: true,
    },
  );
  return post;
};
