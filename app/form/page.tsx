'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './Form.module.css'
import Back from '../../src/components/back/Back'

// Definir la estructura de los datos del formulario
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Tipar la función sendEmail
async function sendEmail (formData: FormData): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      console.log('El correo electrónico se envió correctamente')
      return true
    } else {
      console.error('Ocurrió un error al enviar el correo electrónico')
      return false
    }
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error)
    return false
  }
}

function Form () {
  // Ahora notification puede ser null o un string
  const [notification, setNotification] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Tipado para eventos de cambio en los inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Tipado para el evento de envío del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log('Formulario enviado:', formData)
      const success = await sendEmail(formData)
      if (success) {
        setNotification('El correo electrónico se envió correctamente')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setNotification('Ocurrió un error al enviar el correo electrónico')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setNotification('Ocurrió un error al enviar el correo electrónico')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor='email'>Correo electrónico:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor='subject'>Asunto:</label>
      <input
        type='text'
        id='subject'
        name='subject'
        value={formData.subject}
        onChange={handleChange}
        className={styles.formControl}
        required
      />

      <label htmlFor='message'>Mensaje:</label>
      <textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        className={styles.formMsg}
        required
      ></textarea>
      <div className={styles.formButton}>
        <Back />
        <button className={styles.formSend} type='submit'>
          Enviar
        </button>
      </div>
      {notification && (
        <div className={styles.notification}>{notification}</div>
      )}
    </form>
  )
}

export default Form
