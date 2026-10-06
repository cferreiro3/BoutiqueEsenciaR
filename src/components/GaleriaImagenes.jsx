import galeria1 from '../assets/galeria1.jfif'
import galeria2 from '../assets/galeria2.webp'
import galeria3 from '../assets/galeria3.webp'
import galeria4 from '../assets/galeria4.jpg'
import galeria5 from '../assets/galeria5.webp'
import galeria6 from '../assets/galeria6.avif'
import galeria7 from '../assets/galeria7.webp'
import galeria8 from '../assets/galeria8.webp'

function GaleriaImagenes() {
  return (
    <div className="galeria">
      <img src={galeria1} alt="Perfume de la galería" />
      <img src={galeria2} alt="Perfume de la galería" />
      <img src={galeria3} alt="Perfume de la galería" />
      <img src={galeria4} alt="Perfume de la galería" />
      <img src={galeria7} alt="Perfume de la galería" />
      <img src={galeria8} alt="Perfume de la galería" />
      <img src={galeria5} alt="Perfume de la galería" />
      <img src={galeria6} alt="Perfume de la galería" />
    </div>
  )
}

export default GaleriaImagenes