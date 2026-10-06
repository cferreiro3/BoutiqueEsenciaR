import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <header>
      <h2>Boutique Esencia</h2>

      <button
        className="menu-hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className={menuAbierto ? 'menu-abierto' : ''}>
        <ul>
          <li>
            <NavLink to="/" onClick={cerrarMenu}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/productos" onClick={cerrarMenu}>
              Productos
            </NavLink>
          </li>

          <li>
            <NavLink to="/galeria" onClick={cerrarMenu}>
              Galería
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto" onClick={cerrarMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar