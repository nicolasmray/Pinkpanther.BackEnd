const { Cart } = require('../../db');

const getCart = async (req, res) => {
    try {
        const allCart = await Cart.findAll();
        return res.status(200).json({ allCart });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getCart;

