const { Product } = require("../../db");

const putProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log("req.body", req.body)
    console.log("id", productId)
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    req.body.Categories && product.setCategories(req.body.Categories.map(c => {return c.id}))
    product.save();
    await product.update(req.body);

    return res
      .status(200)
      .json({ message: "Producto actualizado correctamente", product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putProduct;
