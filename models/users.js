module.exports = (sequelize, DataTypes) => {  
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,

      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,

    },
    Fname: {
      type: DataTypes.STRING,
      required: true
    },
    Lname: {
      type: DataTypes.STRING,
      required: true
    },
    Address: {
      type: DataTypes.STRING,
      required: true
    },
    Gift: {
      type: DataTypes.STRING,
      required: true
    },

  });
  User.associate = function(models) {
    User.hasMany(models.Gift, {
      onDelete: "cascade"
    });
  };
  return User;
};