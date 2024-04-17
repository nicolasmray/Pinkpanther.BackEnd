const { Router } = require("express");
const product = require("./product.routes");
const getProduct = require("../controllers/getProduct");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/product", product);

module.exports = router;
