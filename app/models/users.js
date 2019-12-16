'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      username: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false }
    },

    {
      underscored: true,
      freezeTableName: true
    }
  );

  Users.associate = models => {
    Users.hasMany(models.posts, { foreignKey: 'userId' });
  };

  return Users;
};
