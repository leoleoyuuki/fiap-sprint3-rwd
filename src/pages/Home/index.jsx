import Cadeado from '../../assets/cadeado.svg'
import DanosBike from '../../assets/img/danosbike.svg'
import Roubo from '../../assets/img/roubo.svg'
import AcidentesPessoais from '../../assets/img/acidentespessoais.svg'
import DanosTerceiros from '../../assets/img/danosaterceiros.svg'
import ExtensaoCoberturas from '../../assets/img/extensaointernacional.svg'
import './styles.css'
import { Link } from 'react-router-dom'
export default function Home() {
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

      <section>
        <div>
          <img src={DanosBike} alt="Danos á Bike" />
        </div>
        <div>
          <img src={Roubo} alt="Roubo" />
        </div>
        <div>
          <img src={AcidentesPessoais} alt="Acidentes pessoais" />
        </div>
        <div>
          <img src={DanosTerceiros} alt="Danos a terceiros" />
        </div>
        <div>
          <img src={ExtensaoCoberturas} alt="Extensão da cobertura em solo internacional" />
        </div>
        
      </section>
      
    </>
  )
}
