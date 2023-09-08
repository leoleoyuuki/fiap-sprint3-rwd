
import { Link } from 'react-router-dom'
import '../App.css'
export default function Header(props){

    return(
        <>
            <header>
                <div className="head">
                    <div className='logo'><img src={props.logoPortoProps} alt="Logo Porto" /></div>
                    <nav>
                        <ul>
                            <li className='faq'>FAQ</li>
                            <li className='alunos'><Link to={"/alunos"}>Alunos</Link></li>
                            <div className='coberturas'>
                                <li>Coberturas</li>
                            </div>
                        </ul>
                    </nav>
                    <div className="menuMobile"><img src={props.menuProps} alt="menu mobile" /></div>
                </div>
            </header>
        </>
    )
}