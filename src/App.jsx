import Header from './components/header'
import Footer from './components/Footer'
import logoPorto from './assets/logo.svg'
import menu from './assets/menu.svg'
import './App.css'

export default function App(){


  return(
    <>
    <Header logoPortoProps={logoPorto} menuProps={menu}/>

    <Footer/>
    </>
  )
}