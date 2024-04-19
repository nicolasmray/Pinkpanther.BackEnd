const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('Category', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    subcategories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    
    },
  });

  
};
