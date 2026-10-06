import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <div className="card-footer">
        <span>${precio}</span>

        <Link to="/contacto" className="boton-consultar">
          Consultar
        </Link>
      </div>
    </div>
  )
}

export default Card