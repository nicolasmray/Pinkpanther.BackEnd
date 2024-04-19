const { Customer } = require("../../db.js");

const postCustomer = async (req, res) => {
  try {
    const { 
        //id,
        enable, 
        userName, 
        password, 
        role, 
        DNI, 
        birthdate, 
        firstName, 
        lastName, 
        email, 
        telephone, 
        country, 
        city, 
        street, 
        streetNumber, 
        apartmentNumber, 
        postalCode
    } = req.body;
    

    const customer = await Customer.create({
        //id,
        enable, 
        userName, 
        password, 
        role, 
        DNI, 
        birthdate, 
        firstName, 
        lastName, 
        email, 
        telephone, 
        country, 
        city, 
        street, 
        streetNumber, 
        apartmentNumber, 
        postalCode
    });
    return res.status(200).json({ 
      message: "Se creó con éxito el cliente",
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
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCustomer;