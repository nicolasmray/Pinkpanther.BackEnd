const { Order } = require("../../db");

const putOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const newData = req.body;
    const order = await Order.findByPk(orderId);

    if (!order) {
      throw new Error("La orden no existe");
    }

    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        order[key] = newData[key];
      }
    }
    await order.save();

    return res
      .status(200)
      .json({ message: "Orden actualizada correctamente", order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putOrder;
