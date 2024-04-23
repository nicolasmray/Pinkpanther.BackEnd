const { Favorite } = require("../../db");

const deleteFavorite = async (req, res) => {
    try {
        const { id, favorite_id } = req.params;

        const favorite = await Favorite.findOne({
            where: {id: favorite_id, CustomerId: id }
        });

        if (!favorite) {
            return res.status(404).json({ error: "Favorito no encontrado" })
        }

        await favorite.destroy();

        return res.status(200).json({ message: "Favorito eliminado exitosamente" })
    }catch(error) {
        console.error('Error al eliminar el favorito:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = deleteFavorite;