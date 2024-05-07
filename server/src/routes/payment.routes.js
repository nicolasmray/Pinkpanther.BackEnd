const { Router } = require("express");
const createPreference = require("../controllers/payement/payment");
const createWebhook = require("../controllers/payement/webhook");

const payment = Router()

payment.post('/createPreference', createPreference)
payment.post('/webhook', createWebhook)


module.exports = payment;