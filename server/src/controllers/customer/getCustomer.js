const { Customer, Cart, Product } = require("../../db.js");

const getCustomer = async (req, res) => {
  try {
    // const custName = String(req.query.userName).toLowerCase(); ??? ruta para todos o para id?
    // console.log(custName);
    const customer = await Customer.findAll({
      // where: { ???
      //   userName: custName,
      // },
      include: [
        {
          model: Cart,
          include: [Product],
        },
      ],
    });

    if (customer) {
      return res.status(200).json({
        message: "Se encontró el customer:",
        customer,
      });
    }
    return res.status(400).json({ message: "No se encontró el customer:" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCustomer;
