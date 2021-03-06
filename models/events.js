module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_at: {
      type: DataTypes.STRING,
      allowNull: false
    },
    end_at: {
      type: DataTypes.STRING,
      allowNull: false
    },
    club_id: {
       type: DataTypes.STRING, 
    }
  });
 
  return Events;
};