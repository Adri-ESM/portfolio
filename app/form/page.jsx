"use client";
import { useState } from "react";
import styles from "./Form.module.css";
import Back from "@/src/components/back/Back";

async function sendEmail(formData) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("El correo electrónico se envió correctamente");
      // Puedes mostrar un mensaje de éxito o redirigir a una página de confirmación
    } else {
      console.error("Ocurrió un error al enviar el correo electrónico");
      // Puedes mostrar un mensaje de error o manejar el error de otra manera
    }
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
}

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor="email">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor="subject">Asunto:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={styles.formMsg}
        required
      ></textarea>
      <div className={styles.formButton}>
        <Back />
        <button className={styles.formSend} type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
