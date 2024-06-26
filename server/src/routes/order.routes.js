const { Router } = require("express");
const getOrder = require("../controllers/order/getOrder");
const postOrder = require("../controllers/order/postOrder");
const putOrder = require("../controllers/order/putOrder");
const getOrderByCustomer = require("../controllers/order/getOrderByCustomerId");

const order = Router();

order.get("/", getOrder);
order.get("/:customerId", getOrderByCustomer);
order.post("/", postOrder);
order.put("/:id", putOrder);
//order.delete("/:id", deleteCustomer);

module.exports = order;
