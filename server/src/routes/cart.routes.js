const { Router } = require("express");
const postCart = require("../controllers/cart/postCart");
const getCart = require("../controllers/cart/getCart");
const putCart = require("../controllers/cart/putCart");
const deleteCart = require("../controllers/cart/deleteCart");

const cart = Router()

cart.post('/',postCart)
cart.get('/',getCart)
cart.put('/:id',putCart)
cart.delete('/:id',deleteCart)

module.exports = cart