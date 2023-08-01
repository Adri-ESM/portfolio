import nodemailer from "nodemailer";

function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "anggivmorales@gmail.com",
      pass: "Fe123-456",
    },
  });

  const mailOptions = {
    from: "anggivmorales@gmail.com",
    to: "adrievelyn@gmail.com",
    subject: "Asunto del correo",
    text: "Contenido del correo",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log(
        "El correo electrónico ha sido enviado correctamente:",
        info.response
      );
    }
  });
}

export default sendEmail;

// import sgMail from "@sendgrid/mail";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, subject, message } = req.body;

//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//     const msg = {
//       to: "adrievelyn@gmail.com",
//       from: "anggivmorales@gmail.com",
//       subject: subject,
//       text: `Nombre: ${name}\nCorreo electrónico: ${email}\n\n${message}`,
//     };

//     try {
//       await sgMail.send(msg);
//       res.status(200).json({
//         message: "El correo electrónico ha sido enviado correctamente.",
//       });
//     } catch (error) {
//       console.error("Error al enviar el correo electrónico:", error);
//       res
//         .status(500)
//         .json({ error: "Ocurrió un error al enviar el correo electrónico." });
//     }
//   } else {
//     res.status(405).json({ error: "Método no permitido" });
//   }
// }
