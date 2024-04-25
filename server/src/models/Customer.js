const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('customer', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      //defaultValue: DataTypes.UUIDV4,   
      primaryKey: true,
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('DEV','ADMIN','GUEST', 'CUSTOMER'),
      allowNull: false,
    },
    DNI:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone:{
    type: DataTypes.STRING,
      allowNull: false,
    },
    country:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    city:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    street:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apartmentNumber:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode:{
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  });
};