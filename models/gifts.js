module.exports = (sequelize, DataTypes) => {  
    const Gifts = sequelize.define('Gifts', {
  
      name: {
        type: DataTypes.TEXT,
        required: true
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
    });
     

    //one user is going to have many Gifts 
      
        Gifts.associate = function(models) {
            Gifts.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          };
    
          
    return Gifts;
  };