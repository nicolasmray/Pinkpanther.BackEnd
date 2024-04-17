const { Router } = require("express");
const getProduct = require("../controllers/getProduct");

const product = Router();

product.get("/", getProduct);
// product.delete();
// product.post();
// product.put();

module.exports = product;
