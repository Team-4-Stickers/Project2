module.exports = (sequelize, DataTypes) => {  
  const Users = sequelize.define('Users', {
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
  Users.associate = function(models) {
    Users.hasMany(models.Gifts, {
      onDelete: "cascade"
    });
  };
  return Users;
};