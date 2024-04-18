const { Router } = require("express");
const getProduct = require("../controllers/getProduct");
const postProduct = require("../controllers/postProduct");


const product = Router();

product.get("/", getProduct);
product.post("/",postProduct)
// product.delete();
// product.post();
// product.put();

module.exports = product;
