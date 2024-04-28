const { Router } = require("express");
const { createOrder, recieveWebhook } = require("../controllers/payement/mercadopago");

const payment = Router();

payment.post('/create-order/:productId',createOrder)
payment.post('/webhook', recieveWebhook);
payment.get("/success", (req, res) => res.redirect("http://localhost:3001/success"));

module.exports = payment;