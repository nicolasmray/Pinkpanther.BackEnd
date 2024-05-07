const {MercadoPagoConfig, Preference } = require ("mercadopago");
require('dotenv').config();
const axios = require('axios');
const { v5: uuidv5 } = require('uuid');
const URL_LINK = "http://localhost:3001";
//const URL_LINK = 'https://d124-181-110-220-41.ngrok-free.app'



const client = new MercadoPagoConfig({
    accessToken: process.env.MP_TOKEN 
})

const createWebhook = async (req,res) => {
    const payment  = req.query;
    console.log(payment)
    id = payment.id
    try {
        // Aquí puedes verificar el tipo de evento y actuar en consecuencia
        if(payment.type === "payment"){
            // Utiliza axios para hacer una solicitud GET a la API de Mercado Pago
            const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.MP_TOKEN}`
                }
            });
            const data = response.data;
            console.log('data post pago MP', data);
        }
    }catch (error){
        //res.status(500).json({ message: "Error al crear el producto" }, error);
        //res.status(status).json(obj);

       console.log(error);
    }
}

module.exports = createWebhook;