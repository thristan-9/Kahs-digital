import style from '../styles/Logo.module.css'


export default function Logo({ secondary = false}) {
  return (
    <div className={style.logo}>
      <a href="#">
          <div className={`${style.logo__wrapper}`}>
              <h2 className={`${style.logoTitle} ${secondary && style.secondary}`}>KAHS</h2>
              <h3 className={`${style.logoSubTitle} ${secondary && style.secondary}`}>DIGITAL</h3>
          </div>
      </a>
    </div>
  )
}