const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentDate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentAmount:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiptAmount:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trackingNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trackingCourierName: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};