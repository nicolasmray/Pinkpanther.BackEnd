const { Router } = require("express");
const registerAndEmail = require("../controllers/notificaciones/nodemailer");

const notification = Router();

notification.post('/register',registerAndEmail)

module.exports = notification

