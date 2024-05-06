const {MercadoPagoConfig, Preference } = require ("mercadopago");
require('dotenv').config();
const { v5: uuidv5 } = require('uuid');



const client = new MercadoPagoConfig({
    accessToken: process.env.MP_TOKEN 
})

const createPreference = async(req,res) => {
    try{
        const idempotencykey = req.headers['X-Idempotency-key']
        const body = {
            items: [
                {
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS"
                },
            ],
            back_urls:{
                succes: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
                failure: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
                pending: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            },
            auto_return: "aproved"
        }

        const preference =  new Preference(client);
        const result = await preference.create({body, idempotencykey})
        res.status(200).json({id: result.id,});
    }catch (error){
        res.status(500).json({ message: "Error al crear el producto" }, error);
       console.log(error);
    }
}

module.exports = createPreference;