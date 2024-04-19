const { Router } = require("express");
const product = require("./product.routes");
const categoryRouter = require('./category.routes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const productRouter = require("./product.routes")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/product', productRouter)

router.use('/categories', categoryRouter);

router.use("/product", product);


module.exports = router;
