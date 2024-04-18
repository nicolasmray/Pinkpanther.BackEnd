const { Product, Variant } = require("../../db");

const postProduct = async (req, res) => {
  try {
    const { name, enable, variants } = req.body;
    console.log("recibo:", name);

    const product = await Product.create({
      name,
      enable,
    });

    if (variants && variants.length > 0) {
      for (const variantData of variants) {
        const {
          color,
          priceEfectivo,
          priceCuotas,
          size,
          quantity,
          photo,
          supplier,
        } = variantData;
        await Variant.create({
          color,
          priceEfectivo,
          priceCuotas,
          size,
          quantity,
          photo,
          supplier,
        }).then((variant) => {
          // para asociar la variante creada al producto
          product.addVariant(variant);
        });
      }
    }
    return res.status(200).json({ message: "Se creo con exito el producto" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
