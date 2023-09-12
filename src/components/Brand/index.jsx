import PortoSeguroBrand from '../../assets/logo.svg'
import './styles.css'

export default function Brand() {
  return <div onClick={() => window.location.href = '/'}><img className="brand" src={PortoSeguroBrand} /></div>
}
