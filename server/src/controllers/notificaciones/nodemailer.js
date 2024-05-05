const nodemailer = require('nodemailer');
const { Customer } = require('../../db');

// Configuración del nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'elcorreo@gmail.com',
        pass: 'contraseña'
    }
});

const registerAndEmail = async (req, res) => {
    try {
        const { name, email, password, idfirebase, enable, userName, role } = req.body;

        const customerDoc = await Customer.create({
            name,
            email,
            password,
            idfirebase,
            enable,
            userName,
            role
        });

        // Función para enviar el correo electrónico 
        const mailOptions = {
            from: 'elcorreo@gmail.com',
            to: email, 
            subject: '¡Bienvenido a pinkpanther',
            text: `Hola ${name},\n\n¡Bienvenida a PinkPanther!\n\nEstamos emocionados de tenerte como parte de nuestra comunidad.\n\nGracias por unirte a nosotros.\n\nSaludos cordiales,\n\nPinkPanther`
        };

        // Envía el correo electrónico 
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado exitosamente:', info.response);
            }
        });

        
        res.status(201).json(customerDoc);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
};

module.exports = registerAndEmail;
