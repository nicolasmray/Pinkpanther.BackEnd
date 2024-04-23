const { Favorite, Customer } = require("../../db");

const getFavorite = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findByPk(id);
        if(!customer) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        const favorites = await Favorite.findAll({
            where: { CustomerId: id },
            include: [Customer]
        });

        return res.status(200).json(favorites);
    } catch(error) {
        console.error('Error al obtener los favoritos:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = getFavorite;