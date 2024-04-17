const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productRouter = require("./productRouter/product")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/product', productRouter)




module.exports = router;