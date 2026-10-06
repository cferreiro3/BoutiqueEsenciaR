import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <h3>Boutique Esencia</h3>

      <p>Fragancias exclusivas para cada ocasión.</p>

      <div className="redes">
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://wa.me/5491133800408"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <p className="copyright">
        © 2026 Boutique Esencia - Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer