import { HiX } from 'react-icons/hi'
import './styles.css'
import { navLinks } from '../../constants/navLinks'
import { Link } from 'react-router-dom'

export default function MobileMenu(props) {
  const url = window.location.pathname

  const handleClickLink = (section) => {
    const linkSection = document.querySelector(section)

    if (url !== '/') window.location.href = '/'

    window.scrollTo({
      top: linkSection.offsetTop,
      behavior: 'smooth',
    })

    props.setIsMenuOpen(false)
  }

  return (
    <aside>
      <header className="mobile-menu-header">
        <div className="close-icon">
          <HiX onClick={() => props.setIsMenuOpen(false)} size={38} />
        </div>
      </header>
      <nav className="mobile-menu-nav">
        <ul>
          {navLinks.map((item, index) =>
            item.path ? (
              <Link
                onClick={() => props.setIsMenuOpen(false)}
                to={item.path}
                key={index}
              >
                <li>{item.name}</li>
              </Link>
            ) : (
              <li onClick={() => handleClickLink(item.section)} key={index}>
                {item.name}
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  )
}
