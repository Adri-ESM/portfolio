const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 4000; // El puerto en el que escuchará el servidor

const dotenv = require("dotenv");
dotenv.config();

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anggivmorales@gmail.com", // Reemplaza con tu dirección de Gmail o correo de envío
    pass: process.env.GMAIL_PASSWORD, // Accede a la contraseña desde las variables de entorno
  },
});

// API para enviar correo electrónico
app.post("/api/send-email", (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: "anggivmorales@gmail.com", // Reemplaza con tu dirección de Gmail o correo de envío
    to: "anggivmorales@gmail.com", // Reemplaza con la dirección de correo donde quieres recibir los mensajes
    subject: formData.subject,
    text: `Nombre: ${formData.name}\nCorreo electrónico: ${formData.email}\nMensaje: ${formData.message}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ocurrió un error al enviar el correo electrónico:", error);
      res.status(500).send("Ocurrió un error al enviar el correo electrónico");
    } else {
      console.log("El correo electrónico se envió correctamente");
      res.status(200).send("El correo electrónico se envió correctamente");
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

//(los tres para levantar el servidor)
//npm run server
//node server.js
//nodemon server.js (si se trabaja con nodemon)

//npm run dev (levantar la app)
