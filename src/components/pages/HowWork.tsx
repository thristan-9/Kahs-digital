import { useState } from "react";
import style from "../../styles/HowWork.module.css";
import iphone__frame from "../../assets/iphone__frame.png";
import iphone__img_1 from "../../assets/iphone__img_1.png";
import iphone__img_2 from "../../assets/iphone__img_2.png";
import iphone__img_3 from "../../assets/iphone__img_3.png";
import Button from "../Button";

export default function HowWork() {

  const [dotSelected, setDotSelected] = useState(1);

  return (
    <section id="services">
      <div className={`${style.howWork__container}`}>
        <div className={style.top__container}>
          <h1 className={style.top__title}>Como a KAHS funciona</h1>
          <p className={style.top__description}>
            Traçamos a estrategia de marketing que mais <br /> funciona para o{" "}
            <strong>Seu Tipo de Negócio</strong>
          </p>
        </div>

        <div className={`${style.middle__container}`}>

          <div className={style.midlle__box}>
            <span className="material-icons-outlined icon">videocam</span>
            <p>Criaçao de conteudo em alta qualidade</p>
            <p>
              com <strong>Equipamentos Profissionais</strong>
            </p>
          </div>

          <div className={style.midlle__box}>
            <span className="material-icons-outlined icon">insights</span>
            <p>Analise de dados detalhada sobre</p>
            <p>os conteudos postados</p>
          </div>

          <div className={style.midlle__box}>
            <span className="material-icons-outlined icon">add</span>
            <p>de 30 mil visualizacoes</p>
            <p>no primeiro mes</p>
          </div>

          <div className={style.midlle__box}>
            <span className="material-icons-outlined icon">business</span>
            <p>Padronizacao da identidade</p>
            <p>visual da marca</p>
          </div>

        </div>

        <div className={`${style.iphone_slide_wrapper}`}>
          <div className={style.iphone__frame}>
            <img className={style.iphone__frame_img} src={iphone__frame} />

            <div className={style.slider__wrapper}>
              <div className={style.slider}>
                <img
                  id="slide-1"
                  className={`${style.iphone__img} ${style.slide__1}`}
                  src={iphone__img_1}
                />
                <img
                  id="slide-2"
                  className={`${style.iphone__img} ${style.slide__2}`}
                  src={iphone__img_2}
                />
                <img
                  id="slide-3"
                  className={`${style.iphone__img} ${style.slide__3}`}
                  src={iphone__img_3}
                />
              </div>
            </div>
          </div>

          <div className={style.slider__nav}>
            <a onClick={() => setDotSelected(1)} className={`${style.slider__nav_dot} ${dotSelected == 1 && style.dot__selected}`} href="#slide-1"></a>
            <a onClick={() => setDotSelected(2)} className={`${style.slider__nav_dot} ${dotSelected == 2 && style.dot__selected}`} href="#slide-2"></a>
            <a onClick={() => setDotSelected(3)} className={`${style.slider__nav_dot} ${dotSelected == 3 && style.dot__selected}`} href="#slide-3"></a>
          </div>
        </div>

        <div className={style.bottom__container}>
          <Button secondary label="Contato" />
        </div>
      </div>
    </section>
  );
}
