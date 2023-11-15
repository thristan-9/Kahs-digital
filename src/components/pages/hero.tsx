import style from "../../styles/Hero.module.css";
import heroImg from "../../assets/hero__img.webp";
import Button from "../Button";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';


export default function Hero() {
  return (
    <section id="hero" className={style.hero}>
      <div className={`${style.hero__container} container grid noselect`}>
        <div className={`${style.hero__data}`}>

          <h1 className={`${style.hero__title}`}>
            Gerenciamento <br /> de Mídias <br />{" "}
            <span className={`text__gradient`}>Sociais</span>
          </h1>
          <p className={`${style.hero__description}`}>
            Aumente sua visibilidade e conquiste <br /> resultados reais nas
            redes sociais.
          </p>

          <div className={`${style.buttons__wrapper}`}>
            <a href="#services">
              <Button label="Serviços" />
            </a>

            <div className={`${style.icons}`}>
              <div onClick={() => {
                window.open("https://www.instagram.com/kahsdigital_/", 'blank_')
              }} className={style.icon__wrapper}>
                <AiOutlineInstagram className={`${style.hero__icon}`} />
              </div>
              <div onClick={() => {
                window.open("https://www.linkedin.com/company/kahs-digital/", 'blank_')
              }} className={style.icon__wrapper}>
                <AiOutlineLinkedin className={`${style.hero__icon}`} />
              </div>
              <div onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=5547988286788&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.", 'blank_')
              }} className={style.icon__wrapper}>
                <AiOutlineWhatsApp className={`${style.hero__icon}`} />
              </div>
            </div>

          </div>


        </div>

        <img alt="woman colorful" draggable={false} className={style.hero__img} src={heroImg} />

      </div>
    </section>
  );
}
