const { Router } = require("express");
const getProduct = require("../controllers/products/getProduct");
const postProduct = require("../controllers/products/postProduct");
const deleteProduct = require("../controllers/products/deleteProduct");
const putProduct = require("../controllers/products/putProduct");
const getProductById = require("../controllers/products/getProductById");

const product = Router();

product.get("/", getProduct);
product.get("/:id", getProductById);
product.post("/", postProduct);
product.delete("/:id", deleteProduct);
product.put("/:id", putProduct);

module.exports = product;
