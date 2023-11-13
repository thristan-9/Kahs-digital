import { useState } from 'react'
import { navLinks } from '../constants'
import style from '../styles/Header.module.css'
import Logo from './Logo';
import RevealMe from './RevealMe'


export default function Header() {

  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive((menuActive) => !menuActive);
  }

  const toggleMenuClass = menuActive ? style["show-menu"] : "";

  return (
    <header className={style["header"]}>
      <nav className={`${style["nav"]} container noselect`}>

        <Logo />

        <div className={`${style["nav__menu"]} ${toggleMenuClass}`} id="nav-menu">
          <ul className={style["nav__list"]}>
            {navLinks.map((nav) => {
              return (
                <li key={`${nav.id}`}>
                  <a onClick={() => setMenuActive(false)} href={`#${nav.id}`} className={style["nav__link"]}><p>{nav.title}</p></a>
                </li>
              )
            })}
          </ul>

          <div className={style["nav__close"]} id="nav-close">
            <span onClick={() => toggleMenu()} className={`${style.header__icon} material-icons-outlined`}>
              close
            </span>
          </div>

        </div>

        <div className={style["nav__toggle"]} id="nav-toggle">
          <span onClick={() => toggleMenu()} className={`${style.header__icon} material-icons-outlined`}>
            menu
          </span>
        </div>

      </nav>
    </header>
  )
}