import style from '../styles/Logo.module.css'
import logoBlack from '../assets/kash__logo_black.png'
import logoWhite from '../assets/kash__logo_white.png'


export default function Logo({ secondary = false }) {
  return (
    <div className={style.logo}>
      <a href="#">
        <img className={style.logoImg} src={secondary ? logoWhite : logoBlack}/>
      </a>
    </div>
  )
}