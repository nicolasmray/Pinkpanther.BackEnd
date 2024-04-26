
const { Product, Category } = require("../../db");

const postProduct = async (req, res) => {
  try {
    const { name, color, priceEfectivo, priceCuotas, size, quantity, photo, supplier, enable } = req.body;
    console.log("recibo:", name);
    console.log(req.body);

    if(name && color && priceEfectivo && priceCuotas && size && quantity && photo && enable) {

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

      //await product.addCategories(idCategory);

      return res.status(201).json({ message: "Se creó con éxito el producto", product });
    } else {
      return res.status(404).json({ massage: "Faltan datos", error })

    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
