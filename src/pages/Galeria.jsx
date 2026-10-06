import '../styles/Galeria.css'
import GaleriaImagenes from '../components/GaleriaImagenes'

function Galeria() {
  return (
    <main>
      <section className="pagina-galeria">
        <h1>Galería</h1>

        <GaleriaImagenes />
      </section>
    </main>
  )
}

export default Galeria