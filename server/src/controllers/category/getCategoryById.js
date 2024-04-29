const { Product, Category } = require("../../db");

const getCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findByPk(id, {
      include: [{
        model: Product, 
        attributes: ['id', 'name',]
      }]
    });
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCategory;