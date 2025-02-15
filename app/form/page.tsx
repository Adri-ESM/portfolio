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
      return true;
    } else {
      console.error("Ocurrió un error al enviar el correo electrónico");
      return false;
    }
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return false;
  }
}

function Form() {
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Formulario enviado:", formData);
      const success = await sendEmail(formData);
      if (success) {
        setNotification("El correo electrónico se envió correctamente");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setNotification("Ocurrió un error al enviar el correo electrónico");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setNotification("Ocurrió un error al enviar el correo electrónico");
    }
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
      {notification && (
        <div className={styles.notification}>{notification}</div>
      )}
    </form>
  );
}

export default Form;
