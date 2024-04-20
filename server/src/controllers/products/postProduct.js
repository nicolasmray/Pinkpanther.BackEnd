const { Product } = require("../../db");

const postProduct = async (req, res) => {
  try {
    const { name, color, priceEfectivo, priceCuotas, size, quantity, photo, supplier, enable, idCategory } = req.body;
    console.log("recibo:", name);
    console.log(req.body);

    if(name && color && priceEfectivo && priceCuotas && size && quantity && photo && enable &&  idCategory) {
      const product = await Product.create({
        name,
        color,
        priceEfectivo,
        priceCuotas,
        size,
        quantity,
        photo,
        supplier,
        enable,
        idCategory
        
      });

      return res.status(201).json({ message: "Se creó con éxito el producto", product });
    } else {
      return res.status(404).json({ massage: "Faltan datos" })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
