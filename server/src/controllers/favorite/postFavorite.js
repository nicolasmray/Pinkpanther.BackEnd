const { Favorite, Product, Customer } = require('../../db.js');

const postFavorite = async (req, res) => {
  try {
    const { id, product_id } = req.params;
    const customer = await Customer.findByPk(id);
    if(!customer) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    const product = await Product.findByPk(product_id);
    if(!product) {
      return res.status(404).json({ error: "Producto no encontrado" })
    }

    const favorite = await Favorite.create();
    await favorite.setCustomer(customer);
    await favorite.addProduct(product);

    return res.status(201).json({ message: "Favorite creado existosamente" })
  } catch(error) {
    console.error('Error al crear el favorito:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = postFavorite;

