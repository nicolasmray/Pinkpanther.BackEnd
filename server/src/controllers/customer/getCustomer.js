const { Customer, Cart, Product } = require("../../db.js");

const getCustomer = async (req, res) => {
  try {
    const custName = String(req.query.userName).toLowerCase()
    console.log(custName)
    const  customer  = await Customer.findOne({
        where: {
            userName: custName
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

module.exports = getCustomer;