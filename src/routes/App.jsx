import Header from '../components/Header'

export default function RouteWrapper(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
