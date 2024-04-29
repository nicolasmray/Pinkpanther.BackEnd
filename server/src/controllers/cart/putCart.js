/*const { Cart } = require('../../db');

const putCart = async (req, res) => {
    const { id } = req.params; // Corrección aquí
    const { productQuantity, totalPrice, discounts } = req.body;
    console.log("body:", req.body)
  
    try {
      const cart = await Cart.findByPk(id);
      if (!cart) {
        return res.status(404).json({ message: 'No se encontró el carrito' });
      }
  
      // para actualizar los detalles del carrito
      cart.productQuantity = productQuantity;
      cart.totalPrice = totalPrice;
      cart.discounts = discounts;
      await cart.save();
  
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Hubo un error al actualizar el carrito' });
    }
}

module.exports = putCart;
*/