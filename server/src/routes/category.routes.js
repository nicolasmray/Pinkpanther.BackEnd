const { Router } = require("express");
const { categoryHandler } = require('../handlers/categoryhandler');

const router = Router();

router.use("/", categoryHandler);

module.exports = router;