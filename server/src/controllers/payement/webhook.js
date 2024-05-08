const {MercadoPagoConfig, Preference } = require ("mercadopago");
require('dotenv').config();
const axios = require('axios');
const { v5: uuidv5 } = require('uuid');
//const URL_LINK = "http://localhost:3001";
//const URL_LINK = 'https://pinkpanther-backend-ip0f.onrender.com'; //PEGAR NUEVO LINK DE WEBSERVICE RENDER ACA!
const { URL_LINK } = process.env;



const client = new MercadoPagoConfig({
    accessToken: process.env.MP_TOKEN 
})

const createWebhook = async (req,res) => {
    const payment  = req.query;
    //console.log(payment)
    const { 'data.id': id } = req.query;
    const { type } = req.query;
    console.log('id asociacion pago?', id)
    try {
        // Aquí puedes verificar el tipo de evento y actuar en consecuencia
        if(type === "payment"){
            // Utiliza axios para hacer una solicitud GET a la API de Mercado Pago
            const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
                headers: {
                    'Authorization': `Bearer ${client.accessToken}`
                    //'Authorization': `Bearer ${process.env.MP_TOKEN}`
                }
            });
            //console.log('RESPONSE API MP:', response)
            if (response) {
                const data = response.data;
                //console.log('DATA POST PAGO MP', data);
                const externalReference = JSON.parse(data.external_reference);
                const { id: paymentId } = data;

                console.log('External Reference:', externalReference);
                console.log('Payment ID:', paymentId);
                const today = new Date();
                const order = await axios.post(`${URL_LINK}/order/`, { 
                    orderDate: today,
                    status: "SHIPPING",
                    trackingNumber: paymentId,
                    trackingCourierName: paymentId,
                    customerId: externalReference.idUser,
                    productId: externalReference.MPproducts,
                })
                console.log('EL POST:', order)
                 res.status(200).send() //.json(data)
            }
        }
    }catch (error){
        //res.status(500).json({ message: "Error al crear el producto" }, error);
        //res.status(status).json(obj);

       console.log(error);

    }
}

module.exports = createWebhook;