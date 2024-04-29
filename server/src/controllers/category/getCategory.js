const { Op } = require("sequelize");
const { Product, Category } = require("../../db");

const getCategory = async (req, res) => {
  try {
    const { name } = req.query;
    let categories;

    if (name) {
      categories = await Category.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [{
          model: Product, 
          attributes: ['id', 'name', 'photo']
        }]
      });
      if (categories.length === 0) {
        return res.status(404).json({ message: "No se encontraron categorías que coincidan con el nombre proporcionado" });
      }
    } else {
      categories = await Category.findAll({
        include: {
          model: Product,
        }
      });
    }

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCategory;
