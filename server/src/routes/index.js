const { Router } = require("express");
const product = require("./product.routes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const productRouter = require("./productRouter/product")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', productRouter)



router.use("/product", product);

module.exports = router;
