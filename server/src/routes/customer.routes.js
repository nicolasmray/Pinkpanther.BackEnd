const { Router } = require("express");
const postCustomer = require("../controllers/customer/postCustomer");
const getCustomer = require("../controllers/customer/getCustomer");
//const deleteCustomer = require("../controllers/customer/deleteCustomer");
const putCustomer = require("../controllers/customer/putCustomer");

const product = Router();

product.post("/", postCustomer);
product.get("/", getCustomer);
//product.delete("/:id", deleteCustomer);
product.put("/:id", putCustomer);

module.exports = product;