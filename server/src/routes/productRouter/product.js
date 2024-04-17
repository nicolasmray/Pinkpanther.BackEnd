const { Router } = require('express');
const router = Router();
const deleteProduct = require('../../controllers/deleteProduct');


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Validar que el ID sea válido
        if (!(id)) {
            return res.status(400).json({ error: 'El ID del producto no es válido' });
        }
        
        // Eliminar el producto
        const deleteProductResult = await deleteProduct(id);
        
        // Verificar si se eliminó el producto correctamente
        if (deleteProductResult) {
            res.status(200).json({ message: `El producto con ID ${id} ha sido eliminado exitosamente` });
        } else {
            res.status(404).json({ error: `No se encontró el producto con ID ${id}` });
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud' });
    }
});




module.exports = router;
