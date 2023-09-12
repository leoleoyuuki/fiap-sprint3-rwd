import Header from '../components/Header'
import Menu from '../assets/menu.svg'

export default function RouteWrapper(props) {
  return (
    <>
      <Header menuProps={Menu} />
      {props.children}
    </>
  )
}
