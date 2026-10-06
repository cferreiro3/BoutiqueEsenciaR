import Card from '../components/Card'
import '../styles/Productos.css'

import perfume1 from '../assets/perfume1.webp'
import perfume2 from '../assets/perfume2.webp'
import perfume3 from '../assets/perfume3.webp'
import perfume4 from '../assets/perfume4.webp'
import perfume5 from '../assets/perfume5.webp'
import perfume6 from '../assets/perfume6.webp'
import perfume7 from '../assets/perfume7.webp'
import perfume8 from '../assets/perfume8.webp'


function Productos() {
  return (
    <main>
      <section className="pagina-productos">

        <h1>Nuestras Fragancias</h1>

        <p>Encontra tu perfume ideal para cada ocasion</p>

        <div className="contenedor-cards">

          <Card
            nombre="Dolce & Gabanna Light Blue 100ml"
            descripcion="Una fragancia citrica, amaderada. Tu perfume firma en epoca de calor"
            precio="200.000"
            imagen={perfume3}
          />

          <Card
            nombre="Dolce & Gabanna The One Edp"
            descripcion="Una fragancia alicorada perfecta para citas"
            precio="195.000"
            imagen={perfume1}
          />

          <Card
            nombre="Dior Homme Cologne 100ml"
            descripcion="Una fragancia limpia y citrica para el uso diario en verano"
            precio="220.000"
            imagen={perfume6}
          />

          <Card
            nombre="Swt Edt 100ml"
            descripcion="Fragancia dulce avainillada para el uso diario en invierno"
            precio="215.000"
            imagen={perfume5}
          />

          <Card
            nombre="JPG Le Male Elixir 100ml"
            descripcion="Una bomba avainillada la mejor opcion para salidas"
            precio="250.000"
            imagen={perfume7}
          />

          <Card
            nombre="Dolce & Gabanna K Edp 100ml"
            descripcion="Fragancia fresca y madura para cualquier ocasion"
            precio="180.000"
            imagen={perfume2}
          />

          <Card
            nombre="Givenchy Reserve Privee 100ml"
            descripcion="Fragancia elegante con toques de tabaco y licor"
            precio="240.000"
            imagen={perfume8}
          />

          <Card
            nombre="Aqcua Di Gio Edt 100ml"
            descripcion="Fragancia clasica fresca marina para verano"
            precio="160.000"
            imagen={perfume4}
          />

        </div>
      </section>
    </main>
  )
}

export default Productos