import Header from './components/header'
import Footer from './components/Footer'

import logoPorto from './assets/logo.svg'
import Menu from './assets/menu.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    
    <Header logoPortoProps={logoPorto} menuProps={Menu}/>
      <Outlet/>
    <Footer logoPortoProps={logoPorto}/>
    </>
  )
}
