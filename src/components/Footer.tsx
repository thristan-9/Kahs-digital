import style from "../styles/Footer.module.css";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import Logo from './Logo';
import blob from '../assets/blob.png';


export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={`${style.footer__container} container grid`}>

                <img className={style.blob} src={blob}/>

                <div className={`${style.footer__data}`}>
                    <Logo secondary/>

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
