const { Op } = require("sequelize");
const { Product, Category } = require("../../db");

const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    let products;

    if (name) {
      products = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [{
          model: Category, 
          attributes: ['id', 'name',]
        }]
      });
      if (products.length === 0) {
        return res.status(404).json({ message: "No se encontraron productos que coincidan con el nombre proporcionado" });
      }
    } else {
      products = await Product.findAll({
        include: {
          model: Category,
        }
      });
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProduct;
