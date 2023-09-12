/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom'
import Brand from '../Brand'
import './styles.css'
import { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from '../MobileMenu'
import { useScrollLock } from '../../contexts/ScrollLockContext'

export default function Header() {
  const url = window.location.pathname

  const posicaoFAQ = document.querySelector('.secao3')
  const posicaoCobertura = document.querySelector('.secao2')
  const clickFAQ = () => {
    if (url === '/alunos') {
      window.location.href = '/'
    } else if (url === '/') {
      window.scrollTo({
        top: posicaoFAQ.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  const clickCobertura = () => {
    if (url === '/alunos') {
      window.location.href = '/'
    } else if (url === '/') {
      window.scrollTo({
        top: posicaoCobertura.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  // Menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Bloquear scroll ao abrir o menu
  const { lockScroll, unlockScroll } = useScrollLock()

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    isMenuOpen ? lockScroll() : unlockScroll()
  }, [isMenuOpen])

  return (
    <>
      <header>
        <div className="head">
          <div className="logo">
            <Brand />
          </div>
          <nav>
            <ul className="navUl">
              <li className="faq" onClick={clickFAQ}>
                FAQ
              </li>
              <li className="alunos">
                <Link to={'/alunos'}>Alunos</Link>
              </li>
              <div className="coberturas">
                <li onClick={clickCobertura}>Coberturas</li>
              </div>
            </ul>
          </nav>

          <div
            onClick={handleOpenMenu}
            className={`menuMobile ${url !== '/' && 'accent'}`}
          >
            <HiMenu size={38} />
          </div>

          <div className="logo invisible">
            <img alt="" />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  )
}
