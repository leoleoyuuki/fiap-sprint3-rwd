import Cadeado from '../assets/cadeado.svg'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Secao1() {
  return (
    <>
      <section className="secao1">
        <div className="container-secao1">
          <div className="titulo">
            <h1>Pedale mais tranquilo com a segurança Porto</h1>
          </div>
          <div className="subtitulo">
            <img src={Cadeado} alt="cadeado" />
            <p>
              Porto Seguro <span className="underscore">Bike</span>
            </p>
          </div>
          <div className="botao" onClick={() => (window.location.href = '/')}>
            <p>
              <Link to="/">Cotar Gratuitamente</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
