const { Router } = require("express");
const getProduct = require("../controllers/getProduct");
const postProduct = require("../controllers/postProduct");

const product = Router();

product.get("/", getProduct);
// product.delete();
product.post("/", postProduct);
// product.put();

module.exports = product;
