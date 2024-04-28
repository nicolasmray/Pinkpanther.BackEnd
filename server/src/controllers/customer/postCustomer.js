
/* const { Customer } = require("../../db.js");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const postCustomer = async (req, res) => {
  try {
    const { 
        //id,
        enable, 
        //userName, 
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
    
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    const identifier = userCredential.user.uid.toString()

    const idToken = await userCredential.user.getIdToken();
    console.log(idToken)

    const customer = await Customer.create({
        id: identifier,
        enable, 
        //userName, 
        //password, 
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
      customer
    //   : {
    //   id: idToken,
    //   enable: customer.enable,
    //   //userName: customer.userName,
    //   password: customer.password,
    //   role: customer.role,
    //   DNI: customer.DNI,
    //   birthdate: customer.birthdate,
    //   firstName: customer.firstName,
    //   lastName: customer.lastName,
    //   email: customer.email,
    //   telephone: customer.telephone,
    //   country: customer.country,
    //   city: customer.city,
    //   street: customer.street,
    //   streetNumber: customer.streetNumber,
    //   apartmentNumber: customer.apartmentNumber,
    //   postalCode: customer.postalCode
    //   }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCustomer;

*/

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
    
    //const auth = getAuth();
    //const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //const firebaseUid = userCredential.user.uid;
    // Convert Firebase UID to UUID
    //const id = uuidv5(firebaseUid, uuidv5.DNS);
    
const idToken = await userCredential.user.getIdToken(); // sin usar?
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
