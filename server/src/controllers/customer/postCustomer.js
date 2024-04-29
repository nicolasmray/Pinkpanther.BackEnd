const { v5: uuidv5 } = require("uuid");
const { Customer } = require("../../db.js");
//const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const postCustomer = async (req, res) => {
  try {
    const {
      enable,
      password,
      role,
      DNI,
      birthdate,
      userName,
      firstName,
      lastName,
      email,
      telephone,
      country,
      city,
      street,
      streetNumber,
      apartmentNumber,
      postalCode,
    } = req.body;
    
    // Eliminamos las líneas relacionadas con userCredential

    // const idToken = await userCredential.user.getIdToken(); // ¿Se necesita esta línea?
    
    // Creamos el cliente sin el uso de userCredential
    const id = uuidv5(email, uuidv5.DNS); // Generamos un UUID basado en el email
    const customer = await Customer.create({
      id,
      enable,
      role,
      DNI,
      birthdate,
      userName,
      firstName,
      lastName,
      email,
      telephone,
      country,
      city,
      street,
      streetNumber,
      apartmentNumber,
      postalCode,
    });
    
    return res.status(200).json({
      message: "Cliente creado con éxito",
      customer,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCustomer;

