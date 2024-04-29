/* const { Category, Product } = require('../../db');

const createCategory = async (name, subcategories, products) => {
  try {
    const newCategory = await Category.create({
      name,
      subcategories,
      isActive: true,
    });

    if (products && products.length > 0) {
      const productsToAdd = await Promise.all(products.map(async (product) => {
        const foundProduct = await Product.findByPk(product.id);
        return foundProduct;
      }));

      await newCategory.addProducts(productsToAdd);
    }

    return newCategory;
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    throw new Error(`Error al crear la categoría: ${error.message}`);
  }
};

const getCategories = async () => {
  try {
    const categories = await Category.findAll();
    const categoriesMap = await Promise.all(categories.map(async (category) => {
      const products = await category.getProducts({ attributes: ['id', 'name'] });

      const productsMap = products.map(product => ({
        id: product.id,
        name: product.name
      }));

      return {
        id: category.id,
        name: category.name,
        subcategories: category.subcategories,
        isActive: category.isActive,
        products: productsMap
      };
    }));

    return categoriesMap;
  } catch (error) {
    throw new Error(`Error al obtener las categorías: ${error.message}`);
  }
};


const editCategories = async (categoryId, categoryData) => {
  try {
      const existingCategory = await Category.findByPk(categoryId);

      if (!existingCategory) {
          throw new Error('Category doesnt exist');
      }

      const updatedCategory = await existingCategory.update(categoryData);

      return updatedCategory;
  } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
  }
};




module.exports = {createCategory, getCategories, editCategories}; */
