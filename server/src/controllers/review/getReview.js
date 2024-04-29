const { Product, Review, Customer } = require("../../db");

const getProductReviews = async (req, res) => {
  const productId = req.params.productId; // id para buscar producto especifico

  try {
    const product = await Product.findByPk(productId); // en modelo product uso metodo findbypk y le paso el id del producto especifico
    console.log(productId);
    // console.log(product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const reviews = await Review.findAll({
      // en modelo review busca la review con id del producto
      where: {
        productId: productId,
      },
      include: [
        {
          model: Customer,
          attributes: ["userName"],
        },
      ],
      order: [["updatedAt", "DESC"]], // ordena las review por fecha y descendiente
    });

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getProductReviews;
