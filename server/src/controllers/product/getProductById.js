const { Variant, Product } = require("../../db");

const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      include: {
        model: Variant,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
