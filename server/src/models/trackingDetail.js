const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("paymentDetail", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    trackingNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trackingCourierName: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
