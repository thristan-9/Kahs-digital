import style from "../../styles/Hero.module.css";
import heroImg from "../../assets/hero__img.png";
import Button from "../Button";

export default function Hero() {
  return (
    <section id="home" className={style.hero}>
      <div className={`${style.home__container} container grid`}>
        <div className={`${style.home__data}`}>
          <h1 className={`${style.home__title}`}>
            Gerenciamento <br /> de Midias <br />{" "}
            <span className={`text__gradient`}>Sociais</span>
          </h1>
          <h3 className={`${style.home__description}`}>
            Aumente sua visibilidade e conquiste <br /> resultados reais nas
            redes sociais.
          </h3>

          <a href="#services">
            <Button label="Serviços" />
          </a>
        </div>

        {/* <video autoPlay loop muted playsInline className={`${style.hero__img}`} >
          <source src={heroVideo} type="video/webm" />
        </video> */}

        <div className={style.hero__ellipse} />
        <img className={style.hero__img} src={heroImg} />
      </div>
    </section>
  );
}
