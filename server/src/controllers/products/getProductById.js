const { Product } = require("../../db");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
