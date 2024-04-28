/// En el archivo cartController.js
const { Cart, Product, Customer } = require('../../db');

const createCart = async (req, res) => {
  try {
    const { productQuantity, totalPrice, discounts, customerId } = req.body;

    if (!customerId || customerId === '') {
      return res.status(400).json({ error: "El ID del cliente es requerido" });
    }

    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: "El cliente no existe en la base de datos" });
    }

    const cart = await Cart.create({
      productQuantity,
      totalPrice,
      discounts
    });

    await cart.addCustomer(customer);
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

const addToCart = async (req, res) => {
  try {
    const { id, productQuantity, totalPrice, discounts, productId } = req.body;
    // Buscar el carrito basado en el ID del carrito
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw new Error('El carrito no existe');
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('El producto no existe');
    }

    // Agregar el producto al carrito con la cantidad, precio total y descuentos
    await cart.addProduct(product, { through: { productQuantity, totalPrice, discounts } });

    return res.status(200).json({ message: 'Producto agregado al carrito correctamente' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateCartItem = async (req, res) => {
    try {
        const { customerId, productId, productQuantity } = req.body;
        const cart = await Cart.findOne({ where: { customerId } });
        const product = await Product.findByPk(productId);
        if (!cart || !product) {
            throw new Error('El cliente o el producto no existe en el carrito');
        }
        await cart.addProduct(product, { through: { productQuantity } });
        return res.status(200).json({ message: 'Producto actualizado en el carrito correctamente' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const deleteProductsFromCart = async (req, res) => {
    try {
        const { customerId, productId } = req.params;
        const cart = await Cart.findOne({ where: { customerId } });
        if (!cart) {
            throw new Error('No se encontró un carrito para este cliente');
        }

        if (productId) {
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error('El producto no existe');
            }
            await cart.removeProduct(product);
            return res.status(200).json({ message: 'Producto eliminado del carrito correctamente' });
        } else {
            await cart.setProducts([]);
            return res.status(200).json({ message: 'Todos los productos eliminados del carrito correctamente' });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { createCart, getCartProducts, addToCart, updateCartItem, deleteProductsFromCart };
