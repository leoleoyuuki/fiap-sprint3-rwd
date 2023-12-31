import { Link } from 'react-router-dom'
import './styles.css'

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="logo">
            <img src={props.logoPortoProps} alt="Logo Porto" />
          </div>
          <hr />
          <p>&copy; 2023 - Todos os direitos reservados</p>
          <nav>
            <Link to="https://www.portoseguro.com.br/privacidade">
              Política de Privacidade
            </Link>
            <Link to="/https://www.portoseguro.com.br/fale-conosco/ouvidoria">
              Ouvidoria
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
