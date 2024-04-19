const { Router } = require("express");
const postCustomer = require("../controllers/customer/postCustomer");
const getCustomer = require("../controllers/customer/getCustomer");
//const deleteCustomer = require("../controllers/customer/deleteCustomer");
const putCustomer = require("../controllers/customer/putCustomer");

const customer = Router();

customer.post("/", postCustomer);
customer.get("/", getCustomer);
//product.delete("/:id", deleteCustomer);
customer.put("/:id", putCustomer);

module.exports = customer;
