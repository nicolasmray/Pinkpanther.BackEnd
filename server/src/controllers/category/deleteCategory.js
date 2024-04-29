const { Category } = require("../../db");

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "El ID de la categoría no es válido" });
    }

    const categoryToDelete = await Category.findByPk(id);

    if (!categoryToDelete) {
      return res.status(404).json({ error: `No se encontró la categoría con ID ${id}` });
    }
    await categoryToDelete.destroy();

    return res.status(200).json({
      message: `La categoría con ID ${id} ha sido eliminado exitosamente`,
    });

  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud", error });
  }
};

module.exports = deleteCategory;