module.exports = (sequelize, DataTypes) => {
  const Gift = sequelize.define('Gift', {

    giftName: {
      type: DataTypes.TEXT,
      required: true
    },
    priceRange: {
      type: DataTypes.STRING,
      required: true
    },
    giftLink: {
      type: DataTypes.STRING,
      required: true
    },
    giftComment: {
      type: DataTypes.STRING,
      required: false
    },
    giftStatus: {
      type: DataTypes.BOOLEAN,
      required: true,
      default: false
    }
  });
  console.log(Gift);
  return Gift;
};