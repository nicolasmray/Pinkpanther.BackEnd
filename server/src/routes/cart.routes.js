const { Router } = require("express");
const  {getCartProducts, createCart, updateCartItem, addToCart, deleteProductsFromCart}  = require("../controllers/cart/cart");

const cart = Router();

cart.get('/:id', getCartProducts);
cart.post('/add', addToCart); 
cart.post('/create', createCart);
cart.put('/update', updateCartItem);
cart.delete('/delete/:idCustomer/:productId?', deleteProductsFromCart);

module.exports = cart;
