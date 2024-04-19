const { Cart } = require('../../db');

const deleteCart = async (req, res) => {
    const { id } = req.params;

    try { 
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: 'No se encontró el carrito' });
        }
        await cart.destroy();

        res.status(200).json({ message: 'El carrito ha sido eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error al eliminar el carrito' });
    }
};

module.exports = deleteCart;