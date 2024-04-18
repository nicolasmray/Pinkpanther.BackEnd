const { Variant, Product } = require("../db");

const getProduct = async (req, res) => {
  try {
    const product = await Product.findAll({
      include: {
        model: Variant,
        attributes: ["id"],
        through: {
          attributes: [],
        },
      },
    });
    return req.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
