"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insurance.init(
    {
      productID: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      insuranceTime: DataTypes.INTEGER,
      result: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Insurance",
    }
  );
  return Insurance;
};
