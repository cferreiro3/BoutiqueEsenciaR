import '../styles/Contact.css'
import { useState } from 'react'

function Contact() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [consulta, setConsulta] = useState('')
  const [contacto, setContacto] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Datos del formulario:')
    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Teléfono:', telefono)
    console.log('Tipo de consulta:', consulta)
    console.log('Preferencia de contacto:', contacto)
    console.log('Mensaje:', mensaje)
  }

  const handleReset = () => {
    setNombre('')
    setEmail('')
    setTelefono('')
    setMensaje('')
    setConsulta('')
    setContacto('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(event) => {
          setNombre(event.target.value)
          console.log('Nombre:', event.target.value)
        }}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          console.log('Email:', event.target.value)
        }}
      />

      <label htmlFor="telefono">Teléfono</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        value={telefono}
        onChange={(event) => {
          setTelefono(event.target.value)
          console.log('Teléfono:', event.target.value)
        }}
      />

      <label htmlFor="consulta">Tipo de consulta</label>
      <select
        id="consulta"
        name="consulta"
        value={consulta}
        onChange={(event) => {
          setConsulta(event.target.value)
          console.log('Tipo de consulta:', event.target.value)
        }}
      >
        <option value="">Seleccioná una opción</option>
        <option value="producto">Consulta por producto</option>
        <option value="precio">Consulta por precio</option>
        <option value="otro">Otra consulta</option>
      </select>

      <fieldset>
        <legend>¿Cómo preferís que te contactemos?</legend>

        <label>
          <input
            type="radio"
            name="contacto"
            value="email"
            checked={contacto === 'email'}
            onChange={(event) => {
              setContacto(event.target.value)
              console.log(
                'Preferencia de contacto:',
                event.target.value
              )
            }}
          />
          Email
        </label>

        <label>
          <input
            type="radio"
            name="contacto"
            value="telefono"
            checked={contacto === 'telefono'}
            onChange={(event) => {
              setContacto(event.target.value)
              console.log(
                'Preferencia de contacto:',
                event.target.value
              )
            }}
          />
          Teléfono
        </label>
      </fieldset>

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={mensaje}
        onChange={(event) => {
          setMensaje(event.target.value)
          console.log('Mensaje:', event.target.value)
        }}
      ></textarea>

      <div className="botones-formulario">
        <button type="submit">
          Enviar
        </button>

        <button type="button" onClick={handleReset}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default Contact