const { DataTypes } = require("sequelize");

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('variant', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
        type: DataTypes.STRING
      },
      supplier:{
        type: DataTypes.STRING,
        allowNull: false,
      }
  
    });
  };

