const { Router } = require("express");
const postCustomer = require("../controllers/customer/postCustomer");
const getCustomer = require("../controllers/customer/getCustomer");
const getCustomerId = require("../controllers/customer/getCustomerId");
//const deleteCustomer = require("../controllers/customer/deleteCustomer");
const putCustomer = require("../controllers/customer/putCustomer");

const postFavorite = require("../controllers/favorite/postFavorite");
const deleteFavorite = require("../controllers/favorite/deleteFavorite");
const getFavorite = require("../controllers/favorite/getFavorite")


const customer = Router();

customer.post("/", postCustomer);
customer.get("/", getCustomer);
customer.get("/:id", getCustomerId);
//product.delete("/:id", deleteCustomer);
customer.put("/:id", putCustomer);

customer.post("/:id/products/:product_id/favorites", postFavorite);
customer.delete("/:id/favorites/:favorite_id", deleteFavorite);
customer.get("/:id/favorites", getFavorite);


module.exports = customer;
