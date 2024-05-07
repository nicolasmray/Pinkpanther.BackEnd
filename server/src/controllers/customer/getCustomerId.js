const { Customer, Cart, Product } = require("../../db.js");

const getCustomerId = async (req, res) => {
  try {
    const custId = req.params.id
    console.log(custId)
    const  customer  = await Customer.findOne({
        where: {
            //id: custId
            idfirebase: custId
        },
        include: [{
            model: Cart,
            include: [Product]
          }]
    });
    
    if (customer) {
        return res.status(200).json({ 
            message: "Se encontró el customer:", 
            customer: {
            id: customer.id,
            idfirebase: customer.id,
            enable: customer.enable,
            userName: customer.userName,
            password: customer.password,
            role: customer.role,
            DNI: customer.DNI,
            birthdate: customer.birthdate,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            telephone: customer.telephone,
            country: customer.country,
            city: customer.city,
            street: customer.street,
            streetNumber: customer.streetNumber,
            apartmentNumber: customer.apartmentNumber,
            postalCode: customer.postalCode
            }
        });
    }
    return res.status(400).json({ message: "No se encontró el customer:" })

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCustomerId;