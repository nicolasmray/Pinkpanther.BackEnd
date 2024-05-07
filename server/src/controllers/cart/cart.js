const { Cart, Product, Customer } = require('../../db');

const createCart = async (req, res) => {
  try {
    const { productQuantity, customerId, productId } = req.body;

    if (!customerId || customerId === '') {
      return res.status(400).json({ error: "El ID del cliente es requerido" });
    }

    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: "El cliente no existe en la base de datos" });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "El producto no existe en la base de datos" });
    }

    const cart = await Cart.create({
      productQuantity,
      //totalPrice,
      //discounts
    });

    await cart.addCustomer(customer);
    await cart.addProduct(product, { through: { productQuantity } }); // Agregar el producto al carrito

    return res.status(200).json({ message: "Se creó con éxito el carrito", cart });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: error.message });
  }
};
const getCartProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findOne({
      where: { id },
      include: [{ model: Product, as: 'products' }]
    });
    if (!cart) {
      throw new Error('No se encontró un carrito para este cliente');
    }
    return res.status(200).json({ data: cart });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const updateCartItem = async (req, res) => {
  try {
    const { cartId, productId, productQuantity } = req.body;
    const cart = await Cart.findByPk(cartId);
    const product = await Product.findByPk(productId);
    if (!cart || !product) {
      throw new Error('El carrito o el producto no existe');
    }
    await cart.addProduct(product, { through: { productQuantity } });
    return res.status(200).json({ message: 'Producto actualizado en el carrito correctamente' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw new Error('El carrito no existe');
    }
    await cart.destroy();
    return res.status(200).json({ message: 'Carrito eliminado correctamente' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const cart = await Cart.findByPk(cartId);
    if (!cart) {
      throw new Error('El carrito no existe');
    }
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('El producto no existe');
    }
    await cart.removeProduct(product);
    return res.status(200).json({ message: 'Producto eliminado del carrito correctamente' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteAllProductsFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw new Error('El carrito no existe');
    }
    await cart.setProducts([]);
    return res.status(200).json({ message: 'Todos los productos eliminados del carrito correctamente' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllCartProducts = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [{ model: Product, as: 'products' }]
    });
    return res.status(200).json({ data: carts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createCart, getCartProducts,getAllCartProducts, updateCartItem, deleteCart, deleteProductFromCart, deleteAllProductsFromCart };
