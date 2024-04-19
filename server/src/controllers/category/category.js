const { Category } = require('../../db');

// Función para crear una categoría con sus subcategorías
const createCategory = async (name, subcategories) => {
  try {
    const newCategory = await Category.create({
      name,
      subcategories,
      isActive: true,
    });

    return newCategory;
  } catch (error) {
    return error.message;
  }
};


const getCategories = async () => {
    try {
        const categories = await Category.findAll();
        return categories;
    } catch (error) {
        return error.message;
    }
};


const editCategories = async (categoryId, categoryData) => {
  try {
      // Buscar la categoría por su ID
      const existingCategory = await Category.findByPk(categoryId);

      // Verificar si la categoría existe
      if (!existingCategory) {
          throw new Error('Category doesnt exist'); // Lanzar un error específico si la categoría no existe
      }

      // Actualizar la categoría con los datos proporcionados
      const updatedCategory = await existingCategory.update(categoryData);

      return updatedCategory;
  } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
  }
};




module.exports = {createCategory, getCategories, editCategories};
