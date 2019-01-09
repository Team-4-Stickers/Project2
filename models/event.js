module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {

    eventName: {
      type: DataTypes.TEXT,
      required: true
    },
    date: {
      type: DataTypes.DATEONLY,
      required: true
    },
    time: {
      type: DataTypes.TIME,
      required: true
    },
    location: {
      type: DataTypes.TEXT,
      required: true
    },
    direction: {
      type: DataTypes.TEXT,
      required: true
    },

  });
 
  return Event;
};







