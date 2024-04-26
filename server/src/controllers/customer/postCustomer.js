//const { v5: uuidv5 } = require('uuid');
const { Customer } = require("../../db.js");
//const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

const postCustomer = async (req, res) => {
  try {
    const { 
        id,
        enable, 
        userName, 
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
    
    //const auth = getAuth();
    //const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //const firebaseUid = userCredential.user.uid;

    // Convert Firebase UID to UUID
    //const id = uuidv5(firebaseUid, uuidv5.DNS);

    //const idToken = await userCredential.user.getIdToken();

    const customer = await Customer.create({
        id,
        enable,
        userName, 
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
      message: "Cliente creado con éxito",
      customer
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCustomer;

