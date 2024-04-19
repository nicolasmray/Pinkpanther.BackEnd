const { DataTypes } = require('sequelize');

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceEfectivo:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceCuotas: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      size:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      supplier:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
  
    });
  };