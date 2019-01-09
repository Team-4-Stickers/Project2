module.exports = (sequelize, DataTypes) => {
    const Gift = sequelize.define('Gift', {
  
      giftName: {
        type: DataTypes.TEXT,
        required: true
      },
      giftPrice: {
        type: DataTypes.DECIMAL,
        required: true
      },
      giftStatus: {
        type: DataTypes.BOOLEAN,
        required: true
      },
      buying: {
        type: DataTypes.BOOLEAN,
        required: true
      },
     
  
    });
    console.log(Gift); 
    return Gift;
  };