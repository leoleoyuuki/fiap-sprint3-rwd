import { Link } from 'react-router-dom'
import Brand from '../Brand'
import './styles.css'

export default function Header(props) {

  const url = window.location.pathname;

   const posicaoFAQ = document.querySelector('.secao3');
  const clickFAQ = ()=> {
    if(url === '/alunos'){
      window.location.href = '/';
      window.scrollTo({
        top: posicaoFAQ.offsetTop,
        behavior: 'smooth'
      });
    }else if(url === '/'){
      window.scrollTo({
        top: posicaoFAQ.offsetTop,
        behavior: 'smooth'
      });

    }
  }
  return (
    <>
      <header>
        <div className="head">
          <div className="logo">
            <Brand />
          </div>
          <nav>
            <ul className='navUl'>
              <li className="faq" onClick={clickFAQ}>FAQ</li>
              <li className="alunos">
                <Link to={'/alunos'}>Alunos</Link>
              </li>
              <div className="coberturas">
                <li>
                  <Link to={'/'}>Coberturas</Link>
                </li>
              </div>
            </ul>
          </nav>

          <div className="menuMobile" >
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
