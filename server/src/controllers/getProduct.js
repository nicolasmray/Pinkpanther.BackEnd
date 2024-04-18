const { Variant, Product } = require("../db");

const getProduct = async (req, res) => {
  try {
    const customer = await Product.findAll({
      include: {
        model: Variant,
        attributes: ["id"],
        through: {
          attributes: [],
        },
      },
    });
    return req.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
