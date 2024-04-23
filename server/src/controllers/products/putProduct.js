const { Product } = require("../../db");

const putProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const newData = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        product[key] = newData[key];
      }
    }

    await product.save();

    return res
      .status(200)
      .json({ message: "Producto actualizado correctamente", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putProduct;
