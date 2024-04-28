const { Router } = require("express");
const product = require("./product.routes");
const category = require("./category.routes");
const customer = require("./customer.routes");
const order = require("./order.routes");
const cart = require("./cart.routes");
const firebase = require("./firebase.routes");
const review = require("./review.routes");
const payment = require("./payment.routes");

const router = Router();

router.use("/categories", category);
router.use("/product", product);
router.use("/customer", customer);
router.use("/order", order);
router.use("/cart", cart);
router.use("/firebase", firebase);
router.use("/review", review);
router.use('/payment',payment)


module.exports = router;
