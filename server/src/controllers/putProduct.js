const { editProduct } = require('../db'); // Importa la función editProduct de Sequelize

// Controlador para editar un producto
const putProduct= async (req, res) => {
  const productId = req.params.id; // Obtiene el ID del producto de los parámetros de la solicitud
  const newData = req.body; // Obtiene los nuevos datos del producto del cuerpo de la solicitud

  try {
    const updatedProduct = await editProduct(productId, newData); // Llama a la función editProduct para editar el producto

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = putProduct;
