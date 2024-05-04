const { Order } = require("../../db");

const postOrder = async (req, res) => {
  try {
    const {
      orderDate,
      status,
      trackingNumber,
      trackingCourierName,
      customerId,
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

    return res.status(200).json({
      message: "Se creó con éxito la orden",
      order,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postOrder;
