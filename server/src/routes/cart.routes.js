const { Router } = require("express");
const { getCartProducts, getAllCartProducts,createCart, updateCartItem, addToCart, deleteCart, deleteProductFromCart, deleteAllProductsFromCart } = require("../controllers/cart/cart");

const cart = Router();

cart.get('/:id', getCartProducts);
cart.get('/',getAllCartProducts)
cart.post('/create', createCart);
cart.put('/update', updateCartItem);
cart.delete('/delete/:cartId', deleteCart);
cart.delete('/:cartId/products/:productId', deleteProductFromCart);
cart.delete('/:id/products', deleteAllProductsFromCart);

module.exports = cart;
