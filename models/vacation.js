module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("destination", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };