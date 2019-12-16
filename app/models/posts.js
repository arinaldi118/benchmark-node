'use strict';

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    'posts',
    {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      upvotes: { type: DataTypes.INTEGER, allowNull: false },
      downvotes: { type: DataTypes.INTEGER, allowNull: false }
    },

    {
      underscored: true,
      freezeTableName: true
    }
  );

  Posts.associate = models => {
    Posts.belongsTo(models.users, {
      foreignKey: 'userId'
    });
  };

  return Posts;
};
