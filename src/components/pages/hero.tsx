import style from "../../styles/Hero.module.css";
import heroImg from "../../assets/hero__img.png";
import Button from "../Button";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';


export default function Hero() {
  return (
    <section id="hero" className={style.hero}>
      <div className={`${style.hero__container} container grid`}>
        <div className={`${style.hero__data}`}>
          <h1 className={`${style.hero__title}`}>
            Gerenciamento <br /> de Midias <br />{" "}
            <span className={`text__gradient`}>Sociais</span>
          </h1>
          <h3 className={`${style.hero__description}`}>
            Aumente sua visibilidade e conquiste <br /> resultados reais nas
            redes sociais.
          </h3>

          <div className={`${style.buttons__wrapper}`}>
            <a href="#how_work">
              <Button label="Serviços" />
            </a>

            <div className={`${style.icons}`}>
              <div className={style.icon__wrapper}>
                <AiOutlineInstagram className={`${style.hero__icon}`} />
              </div>
              <div className={style.icon__wrapper}>
                <AiOutlineLinkedin className={`${style.hero__icon}`} />
              </div>
              <div className={style.icon__wrapper}>
                <AiOutlineWhatsApp className={`${style.hero__icon}`} />
              </div>
            </div>
        
          </div>

        </div>

        <div className={style.hero__ellipse} />
        <img className={style.hero__img} src={heroImg} />

      </div>
    </section>
  );
}
