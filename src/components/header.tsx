import { useState } from 'react'
import { navLinks } from '../constants'
import style from '../styles/header.module.css'

export default function Header() {

  type nav = {
    id: string,
    title: string
  };

  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive((menuActive) => !menuActive);
  }

  const toggleMenuClass = menuActive ? style["show-menu"] : "";

  return (
    <header className={style["header"]}>
      <nav className={`${style["nav"]} container`}>

        <a href="/">
          <div className={`${style.logo}`}>
            <h1 className={`${style.logoTitle}`}>KAHS</h1>
            <h2 className={`${style.logoSubTitle}`}>DIGITAL</h2>
          </div>
        </a>

        <div className={`${style["nav__menu"]} ${toggleMenuClass}`} id="nav-menu">
          <ul className={style["nav__list"]}>
            {navLinks.map((nav: nav)=> {
              return (
                <li key={`${nav.id}`}>
                  <a onClick={() => setMenuActive(false)} href={`#${nav.id}`} className={style["nav__link"]}>{nav.title}</a>
                </li>
              )
            })}
          </ul>

          <div className={style["nav__close"]} id="nav-close">
            <span onClick={() => toggleMenu()} className="material-icons-outlined pointer">
              close
            </span>
          </div>

        </div>

        <div className={style["nav__toggle"]} id="nav-toggle">
          <span onClick={() => toggleMenu()} className="material-icons-outlined pointer">
            menu
          </span>
        </div>

      </nav>
    </header>
  )
}