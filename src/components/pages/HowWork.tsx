import { useState } from "react";

import style from "../../styles/HowWork.module.css";
import iphone__frame from "../../assets/iphone__frame.png";
import iphone__img_1 from "../../assets/iphone__img_1.png";
import iphone__img_2 from "../../assets/iphone__img_2.png";
import iphone__img_3 from "../../assets/iphone__img_3.png";
import Button from "../Button";

export default function HowWork() {

  const [dotSelected, setDotSelected] = useState(1);

  function onClickNavDot(dot: number) {
    setDotSelected(dot);
    setTimeout(() => {
      window.scrollTo({ top: window.scrollY - 1, behavior: "instant" })
    },500);
  }

  return (
    <section id="howWork">
      <div className={`${style.howWork__container}`}>
        <div className={style.top__container}>
          <h1 className={`${style.top__title} title`}>Como a KAHS funciona</h1>
          <p className={style.top__description}>
            Traçamos a estrategia de marketing que mais <br /> funciona para o{" "}
            <strong>Seu Tipo de Negócio</strong>
          </p>
        </div>

        <div className={`${style.middle__container}`}>

          <div className={style.middle__box}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>videocam</span>
            <p className={style.box__text}>Criaçao de conteudo em alta qualidade</p>
            <p className={style.box__text}>
              com <strong>Equipamentos Profissionais</strong>
            </p>
          </div>

          <div className={`${style.middle__box} ${style.box__2}`}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>insights</span>
            <p className={style.box__text}>Marketing estratégico para crescimento nas redes</p>
            <p className={style.box__text}>sociais, visando <strong>Objetivos do Cliente</strong></p>
          </div>


          <div className={`${style.middle__box} ${style.box__2}`}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>add</span>
            <p className={style.box__text}>Apresenta resultados positivos já no primeiro</p>
            <p className={style.box__text}>mês de serviço, com <strong>Relatórios Semanais</strong></p>
          </div>

          <div className={style.middle__box}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>business</span>
            <p className={style.box__text}>Padronizacao da identidade</p>
            <p className={style.box__text}><strong>Visual da Marca</strong></p>
          </div>
        
        </div>

        <div className={`${style.bgWhite}`}></div>

        <div className={`${style.iphone_slide_wrapper}`}>

          <div className={style.iphone__frame}>
            <img className={style.iphone__frame_img} src={iphone__frame} />

            <div className={style.slider}>
              <img id="slide-1" className={style.iphone__img} src={iphone__img_1} />
              <img id="slide-2" className={style.iphone__img} src={iphone__img_2} />
              <img id="slide-3" className={style.iphone__img} src={iphone__img_3} />
            </div>

          </div>

          <div className={style.slider__nav}>
            <a onClick={() => onClickNavDot(1)} className={`${style.slider__nav_dot} ${dotSelected == 1 && style.dot__selected}`} href="#slide-1"></a>
            <a onClick={() => onClickNavDot(2)} className={`${style.slider__nav_dot} ${dotSelected == 2 && style.dot__selected}`} href="#slide-2"></a>
            <a onClick={() => onClickNavDot(3)} className={`${style.slider__nav_dot} ${dotSelected == 3 && style.dot__selected}`} href="#slide-3"></a>
          </div>
        </div>



        <div className={style.bottom__container}>

          <div className={`${style.middle__box} ${style.box__3}`}>
            <span className="material-icons-outlined icon">insights</span>
            <p className={style.box__text}>Analise de dados detalhada sobre</p>
            <p className={style.box__text}>os conteudos postados</p>
          </div>

          <div className={`${style.middle__box} ${style.box__3}`}>
            <span className="material-icons-outlined icon">add</span>
            <p className={style.box__text}>de 30 mil visualizacoes</p>
            <p className={style.box__text}>no primeiro mes</p>
          </div>

          <a href="#contact">
            <Button secondary label="Contato" />
          </a>

        </div>
      </div>
    </section>
  );
}
