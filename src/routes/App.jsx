import Header from '../components/Header'
import Menu from '../assets/menu.svg'
import Footer from '../components/Footer'
import Logo from '../assets/logo.svg'

export default function RouteWrapper(props) {
  return (
    <>
      <Header menuProps={Menu}/>
      {props.children}
      <Footer logoPortoProps={Logo} />
    </>
  )
}
