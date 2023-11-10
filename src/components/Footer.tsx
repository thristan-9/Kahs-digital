import style from "../styles/Footer.module.css";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from './Logo';
import blob from '../assets/blob.png';
import { navLinks } from '../constants'



export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={`${style.footer__container} container grid`}>

                <img draggable={false} className={style.blob} src={blob}/>

                <div className={`${style.footer__data}`}>
                    <Logo secondary/>

                    <ul className={style.nav__list}>
                        {navLinks.map((nav) => {
                            return (
                                <li key={`${nav.id}`}>
                                    <a href={`#${nav.id}`} className={style.nav__link}>{nav.title}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className={`${style.icons__wrapper}`}>
                        <AiOutlineInstagram className={`${style.footer__icon}`} />

                        <AiOutlineLinkedin className={`${style.footer__icon}`} />

                        <AiOutlineWhatsApp className={`${style.footer__icon}`} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
