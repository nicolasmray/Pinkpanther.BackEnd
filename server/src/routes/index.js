const { Router } = require("express");
const product = require("./product.routes");
const customer = require("./customer.routes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/product", product);
router.use("/customer", customer);

module.exports = router;
