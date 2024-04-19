const { Order } = require("../../db");

const getOrder = async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getOrder;
