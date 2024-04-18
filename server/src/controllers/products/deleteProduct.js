const { Product } = require("../../db");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "El ID del producto no es válido" });
    }

    const findProductToDelete = await Product.findOne({
      where: {
        id: id,
      },
    });

    if (!findProductToDelete) {
      throw new Error("No se encontro el producto");
    } else {
      await findProductToDelete.destroy();
    } // si lo encuentra lo destruye

    if (findProductToDelete) {
      // como lo encuentra ?
      return res.status(200).json({
        message: `El producto con ID ${id} ha sido eliminado exitosamente`,
      });
    } else {
      return res
        .status(404)
        .json({ error: `No se encontró el producto con ID ${id}` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud" });
  }
};

module.exports = deleteProduct;
