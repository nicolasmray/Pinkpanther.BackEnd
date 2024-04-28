const dotenv = require("dotenv");
const { Product } = require("../../db");
const axios = require('axios');

dotenv.config();

const mercadopagoAxios = axios.create({
  baseURL: 'https://api.mercadopago.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.MP_TOKEN}`, 
  },
});

const createOrder = async (req, res) => {
  const productId = req.params.productId;
  const { totalPrice, quantity } = req.body; // Agrega 'quantity' como un campo en el body

  if (!productId) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const unitPrice = parseFloat(totalPrice) / quantity; // Calcula el precio unitario

    const preference = {
      items: [
        {
          title: product.name,
          unit_price: 200, // Usa el precio unitario calculado
          currency_id: "ARS",
          quantity: 1, // Usa la cantidad proporcionada en el body
        },
      ],
      back_urls: {
        success: "http://localhost:3001/success",
      },
      notification_url: "http://localhost:3001//webhook",
    };

    const response = await mercadopagoAxios.post(
      '/checkout/preferences',
      preference
    );

    if (response.data.init_point) {
      res.json({ paymentUrl: response.data.init_point });
    } else {
      res.status(500).json({ message: "Error processing payment" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing payment" });
  }
};

const recieveWebhook = (req, res) => {
  const payment = req.body;

  console.log(payment);

  if (payment.type === "payment") {
    mercadopagoAxios.get(`/v1/payments/${payment.data.id}`)
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
      });
  }

  res.sendStatus(204);
};

module.exports = { createOrder, recieveWebhook };
