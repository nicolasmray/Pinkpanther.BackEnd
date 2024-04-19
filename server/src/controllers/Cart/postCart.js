const { Cart } = require('../../db');

const postCart = async (req, res) => {
    try {
        const { productQuantity, totalPrice, discounts } = req.body;

        const cart = await Cart.create({
            productQuantity,
            totalPrice,
            discounts
        });

        return res.status(200).json({ message: "Se creó con éxito el carrito", cart });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = postCart;
