const { Category } = require("../../db");

const putCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const newData = req.body;

    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        category[key] = newData[key];
      }
    }

    await category.save();

    return res
      .status(200)
      .json({ message: "Categoría actualizada correctamente", category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putCategory;