module.exports = (sequelize, DataTypes) => {  
    const Gift = sequelize.define('Gift', {
  
      name: {
        type: DataTypes.TEXT,
        required: true
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
    });
     

    //one user is going to have many Gift 
      
        Gift.associate = function(models) {
            Gift.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          };
    
          
    return Gift;
  };