const { Customer } = require("../../db.js");

const putCustomer = async (req, res) => {
  try {
    // Extract customer ID from the request parameters
    const customerId = req.params.id;

    // Find the customer by ID
    const customer = await Customer.findByPk(customerId);
    console.log(customer)

    // If the customer doesn't exist, return a 404 Not Found response
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Update customer properties with values from the request body
    if (req.body.enable !== undefined) {
      customer.enable = req.body.enable;
    }
    if (req.body.userName !== undefined) {
      customer.userName = req.body.userName;
    }
    if (req.body.password !== undefined) {
      customer.password = req.body.password;
    }
    if (req.body.role !== undefined) {
      customer.role = req.body.role;
    }
    if (req.body.DNI !== undefined) {
      customer.DNI = req.body.DNI;
    }
    if (req.body.birthdate !== undefined) {
      customer.birthdate = req.body.birthdate;
    }
    if (req.body.firstName !== undefined) {
      customer.firstName = req.body.firstName;
    }
    if (req.body.lastName !== undefined) {
      customer.lastName = req.body.lastName;
    }
    if (req.body.email !== undefined) {
      customer.email = req.body.email;
    }
    if (req.body.telephone !== undefined) {
      customer.telephone = req.body.telephone;
    }
    if (req.body.country !== undefined) {
      customer.country = req.body.country;
    }
    if (req.body.city !== undefined) {
      customer.city = req.body.city;
    }
    if (req.body.street !== undefined) {
      customer.street = req.body.street;
    }
    if (req.body.streetNumber !== undefined) {
      customer.streetNumber = req.body.streetNumber;
    }
    if (req.body.apartmentNumber !== undefined) {
      customer.apartmentNumber = req.body.apartmentNumber;
    }
    if (req.body.postalCode !== undefined) {
      customer.postalCode = req.body.postalCode;
    }
    // Update other properties as needed...

    // Save the updated customer to the database
    await customer.save();

    // Return a success response
    return res.status(200).json({ message: "Customer updated successfully", customer });
  } catch (error) {
    // Return an error response if any error occurs
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putCustomer;