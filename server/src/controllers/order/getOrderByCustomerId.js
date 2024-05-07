const { Order, Product } = require("../../db");

const getOrderByCustomer = async (req, res) => {
  try {
    const custId = req.params.customerId;
    const allOrdersByCustomer = await Order.findAll({
      where: {
        customerId: custId,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    return res.status(200).json(allOrdersByCustomer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getOrderByCustomer;
