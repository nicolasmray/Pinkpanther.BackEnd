const { Router } = require("express");
const getProduct = require("../controllers/products/getProduct");
const postProduct = require("../controllers/products/postProduct");
const deleteProduct = require("../controllers/products/deleteProduct");

const product = Router();

product.get("/", getProduct);
product.post("/", postProduct);
product.delete("/:id", deleteProduct);
// product.post();
// product.put();

module.exports = product;
