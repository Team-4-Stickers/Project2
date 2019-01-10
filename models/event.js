module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {

    eventName: {
      type: DataTypes.TEXT,
      required: true
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      required: true
    },
    eventTime: {
      type: DataTypes.TIME,
      required: true
    },
    eventLocation: {
      type: DataTypes.TEXT,
      required: true
    },
    eventDirections: {
      type: DataTypes.STRING,
      required: true
    },
    uniqueCode: {
      type: DataTypes.TEXT,
      required: true
    },

  });
  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }); };
  console.log(Event); 
  return Event;
};







