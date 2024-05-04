const { Product, Category } = require("../../db");

const postCategory = async (req, res) => {
  try {
    const { name, isActive, subcategories, Products } = req.body;

    if(name && subcategories && isActive) {
      const category = await Category.create({
        name,
        subcategories,
        isActive
      });

      await category.addProducts(Products);

      return res.status(201).json({ message: "Se creó con éxito la categoría", category });
    } else {
      return res.status(404).json({ massage: "Faltan datos", error })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCategory;