const { Router } = require("express");
const product = require("./product.routes");
const customer = require("./customer.routes");
const order = require("./order.routes");
const cart = require("./cart.routes");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/product", product);
router.use("/customer", customer);
router.use("/order", order);
router.use('/cart',cart)

module.exports = router;
