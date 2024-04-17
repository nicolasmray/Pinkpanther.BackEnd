const { DataTypes } = require('sequelize');

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
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      suplier:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      quanity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING
      },
      color:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      supplier:{
        type: DataTypes.STRING,
        allowNull: false,
      }
  
    });
  };