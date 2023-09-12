import { Link } from 'react-router-dom'
import Brand from '../Brand'
import './styles.css'

export default function Header(props) {
  return (
    <>
      <header>
        <div className="head">
          <div className="logo">
            <Brand />
          </div>
          <nav>
            <ul className='navUl'>
              <li className="faq">FAQ</li>
              <li className="alunos">
                <Link to={'/alunos'}>Alunos</Link>
              </li>
              <div className="coberturas">
                <li>Coberturas</li>
              </div>
            </ul>
          </nav>

          <div className="menuMobile" onClick={document.querySelector(".navUl").style} >
            <img src={props.menuProps} alt="menu mobile" />
          </div>
          <div className="logo invisible">
            <img alt="" />
          </div>
        </div>
      </header>
    </>
  )
}
