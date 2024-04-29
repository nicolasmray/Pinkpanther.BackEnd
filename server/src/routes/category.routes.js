const { Router } = require("express");
/* const { categoryHandler } = require('../handlers/categoryhandler'); */
const getCategory = require("../controllers/category/getCategory");
const getCategoryById = require("../controllers/category/getCategoryById")
const postCategory = require("../controllers/category/postCategory");
const deleteCategory = require("../controllers/category/deleteCategory");
const putCategory = require("../controllers/category/putCategory")

const category = Router();

/* router.use("/", categoryHandler); */

category.get("/", getCategory);
category.get("/:id", getCategoryById);
category.post("/", postCategory);
category.delete("/:id", deleteCategory);
category.put("/:id", putCategory)

module.exports = category;