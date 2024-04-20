const { Router } = require("express");
const  {createCategory, getCategories, editCategories}  = require('../controllers/category/category');


const categoryHandler = Router();
// POST 
categoryHandler.post('/new', async (req, res) => {
    try {
        const { name, subcategories } = req.body;
        const newCategory = await createCategory(name, subcategories);
        res.status(201).json({ category: newCategory });
      } catch (error) {
        console.error("Error al crear la categoría:", error);
        res.status(500).json({ error: "Error al crear la categoría" });
      }
    });

//GET
categoryHandler.get('/', async (req, res) => {
    try {
      const categorias = await getCategories();
      res.status(200).json(categorias); // Devolver la lista de categorías con sus productos asociados
    } catch(error) {
      res.status(400).json({ error: error.message });
    }
  });

categoryHandler.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, isActive, subcategories } = req.body;

    try {
        const updatingCategory = await editCategories(id, { name, isActive, subcategories });
        res.status(200).json(updatingCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = {
    categoryHandler
}