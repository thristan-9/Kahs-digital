import style from "../styles/Footer.module.css";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from './Logo';
import blob from '../assets/blob.png';
import { navLinks } from '../constants'
import RevealMe from "./RevealMe";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={`${style.footer__container} container grid`}>

                <RevealMe reset origin="top">


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
                            <AiOutlineInstagram onClick={() => {
                                window.open("https://www.instagram.com/kahsdigital_/", 'blank_')
                            }} className={`${style.footer__icon}`} />

                            <AiOutlineLinkedin onClick={() => {
                                window.open("https://www.linkedin.com/company/kahs-digital/", 'blank_')
                            }} className={`${style.footer__icon}`} />

                            <AiOutlineWhatsApp onClick={()=> {
                                window.open("https://api.whatsapp.com/send?phone=5547988286788&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.",'blank_')
                            }} className={`${style.footer__icon}`} />
                        </div>
                    </div>

                </RevealMe>
            </div>
        </footer>
    );
}
