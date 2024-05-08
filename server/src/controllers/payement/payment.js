const {MercadoPagoConfig, Preference } = require ("mercadopago");
const axios = require('axios');
require('dotenv').config();
const { v5: uuidv5 } = require('uuid');
const { URL_LINK } = process.env;
//const URL_LINK = 'https://pinkpanther-backend-ip0f.onrender.com'; //PEGAR NUEVO LINK DE WEBSERVICE RENDER ACA!
//const URL_LINK = 'https://d124-181-110-220-41.ngrok-free.app' 


const client = new MercadoPagoConfig({
    accessToken: process.env.MP_TOKEN 
})

const createPreference = async(req,res) => {
    const { cart, idUser, MPproducts} = req.body
    //console.log("req.body:", cart, idUser, MPproducts)
    try{
        const idempotencykey = req.headers['X-Idempotency-key']
        const body = {
            external_reference: { idUser, MPproducts },
            items: [
                {
                title: cart.title,
                quantity: Number(cart.quantity),
                unit_price: Number(cart.price),
                currency_id: "ARS",
                },
            ],
            back_urls:{
                success: "https://pinkpantherfront.vercel.app/",
                failure: "https://pinkpantherfront.vercel.app/",
                pending: "https://pinkpantherfront.vercel.app/",
            },
            auto_return: "approved",
            notification_url: `${URL_LINK}/payment/webhook`
        }

        const preference =  new Preference(client);
        const result = await preference.create({body, idempotencykey})
        //res.status(200).json({id: result.id});
        res.status(200).json({init_point: result.init_point}); //este es el que funciona!
        //res.status(200).json({result});
        //console.log({idPref: result.sandbox_init_point})
        //console.log(result)
    }catch (error){
        //res.status(500).json({ message: "Error al crear el producto" }, error);
        //res.status(status).json(obj);

       console.log(error);
    }
}

module.exports = createPreference;


// const {MercadoPagoConfig, Preference } = require ("mercadopago");
// const axios = require('axios');
// require('dotenv').config();
// const { v5: uuidv5 } = require('uuid');
// //const URL_LINK = 'https://pinkpanther-backend-ip0f.onrender.com';
// const URL_LINK = 'https://d124-181-110-220-41.ngrok-free.app'


// const client = new MercadoPagoConfig({
//     accessToken: process.env.MP_TOKEN 
// })

// const createPreference = async(req,res) => {
//     try{
//         const idempotencykey = req.headers['X-Idempotency-key']
//         const body = {
//             items: [
//                 {
//                 title: req.body.title,
//                 quantity: Number(req.body.quantity),
//                 unit_price: Number(req.body.price),
//                 currency_id: "ARS",
//                 orderId: req.body.orderId,
//                 customerId: req.body.customerId,
//                 customerEmail: req.body.customerEmail,
//                 },
//             ],
//             back_urls:{
//                 success: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
//                 failure: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
//                 pending: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
//             },
//             auto_return: "approved",
//             notification_url: `${URL_LINK}/payment/webhook`
//         }

//         const preference =  new Preference(client);
//         const result = await preference.create({body, idempotencykey})
//         //res.status(200).json({id: result.id});
//         res.status(200).json({init_point: result.init_point}); //este es el que funciona!
//         //res.status(200).json({result});
//         //console.log({idPref: result.sandbox_init_point})
//         console.log(result)
//     }catch (error){
//         //res.status(500).json({ message: "Error al crear el producto" }, error);
//         //res.status(status).json(obj);

//        console.log(error);
//     }
// }

// module.exports = createPreference;