import { Link } from 'react-router-dom'
import '../styles/FloatingButtons.css'

function FloatingButtons() {
  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="botones-flotantes">
      <Link
        to="/contacto"
        className="boton-flotante"
        aria-label="Ir a contacto"
      >
        <i className="fa-regular fa-comment"></i>
      </Link>

      <button
        className="boton-flotante"
        onClick={volverArriba}
        aria-label="Volver arriba"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  )
}

export default FloatingButtons