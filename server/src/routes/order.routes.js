const { Router } = require("express");
const getOrder = require("../controllers/order/getOrder");
const postOrder = require("../controllers/order/postOrder");

const order = Router();

order.get("/", getOrder);
order.post("/", postOrder);
//order.delete("/:id", deleteCustomer);
// order.put("/:id", putCustomer);

module.exports = order;
