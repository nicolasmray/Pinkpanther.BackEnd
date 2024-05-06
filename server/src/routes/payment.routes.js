const { Router } = require("express");
const createPreference = require("../controllers/payement/payment");

const payment = Router()

payment.post('/createPreference',createPreference)


module.exports = payment;