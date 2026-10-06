import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Descubrí tu fragancia favorita aquí</h1>

        <p>
          Bienvenidos a Boutique Esencia, acá vas a encontrar toda la
          variedad de perfumes para cada ocasión al mejor precio.
        </p>

        <Link to="/productos" className="cta">
          Encontrá Tu Fragancia
        </Link>
      </section>
    </main>
  )
}

export default Home