
const { Product, Category } = require("../../db");
const {ValidationError} = require('sequelize');

const postProduct = async (req, res) => {
  try {
    const { name, color, priceEfectivo, priceCuotas, size, quantity, photo, supplier, enable, Categories } = req.body;
    console.log("recibo:", name);
    console.log(req.body);

      const product = await Product.create({
        name,
        color,
        priceEfectivo,
        priceCuotas,
        size,
        quantity,
        photo,
        supplier,
        enable
      });

      await product.addCategories(Categories);

      return res.status(201).json({ message: "Se creó con éxito el producto", product });

  } catch (error) {
    if ( error instanceof ValidationError ) {
      return res.status(422).json({ error: error.message });
     } else {
        throw error;
    }
  }
};

module.exports = postProduct;
