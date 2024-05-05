const { Order, Product } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const {
      orderDate,
      status,
      trackingNumber,
      trackingCourierName,
      customerId,
      productId,
    } = req.body;

    if (!orderDate || !status || !trackingNumber || !trackingCourierName)
      throw new Error("Faltan datos");

    const order = await Order.create({
      orderDate,
      status,
      trackingNumber,
      trackingCourierName,
      customerId,
    });

    if (!Array.isArray(productId)) {
      throw new Error("Los productos deben ser un array");
    }

    const allProducts = await Promise.all(
      productId.map(async (productId) => {
        console.log("hola", productId);
        const foundProduct = await Product.findByPk(productId);
        if (!foundProduct) {
          throw new Error(
            `El producto con ID ${productId} no se encontró en la base de datos`
          );
        }
        return foundProduct;
      })
    );

    await order.addProducts(allProducts);

    return res.status(200).json({
      message: "Se creó con éxito la orden",
      order,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postOrder;
