import Header from './components/header'
import Footer from './components/Footer'
import Secao1 from './components/Secao1'

import logoPorto from './assets/logo.svg'
import Menu from './assets/menu.svg'
import './App.css'

export default function App() {
  return (
    <>
      <Header logoPortoProps={logoPorto} menuProps={Menu} />
      <Secao1 />
      <Footer logoPortoProps={logoPorto} />
    </>
  )
}
