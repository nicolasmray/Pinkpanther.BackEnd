/* const { Router } = require("express"); */


/* const  {createCategory, getCategories, editCategories}  = require('../controllers/category/category');
const { Category, Product } = require("../db") */

/* const categoryHandler = Router();
categoryHandler.post('/new', async (req, res) => {
  try {
    const { name, subcategories, Products } = req.body;

    const newCategory = await createCategory(name, subcategories, Products);

    res.status(201).json({ category: newCategory });
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    res.status(500).json({ error: "Error al crear la categoría" });
  }
}); */


/* categoryHandler.get("/", async (req, res) => {
  try {
    const categorias = await getCategories();
    res.status(200).json(categorias); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); */

/* categoryHandler.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isActive, subcategories } = req.body;
 */
  /* try {
    const updatingCategory = await editCategories(id, {
      name,
      isActive,
      subcategories,
    });
    res.status(200).json(updatingCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); */

/* module.exports = {
  categoryHandler,
}; */
