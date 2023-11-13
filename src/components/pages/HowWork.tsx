import { useState, useRef } from "react";

import style from "../../styles/HowWork.module.css";
import iphone__frame from "../../assets/iphone__frame.png";
import {iphone__imgs} from "../../constants";
import Button from "../Button";
import RevealMe from "../RevealMe";

export default function HowWork() {

  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);


  function move(direction, index) {
    let newSlideNumber = index;
    const totalNoofSlides = sliderRef.current.children.length - 2;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1
    } else if (direction === "right") {
      newSlideNumber = slideNumber === totalNoofSlides ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);

    Array.from(sliderRef.current.children).forEach((slide, i) => {
      if (i != 0) {
        slide.classList.remove(style.img__active);
        slide.classList.add(style.img);
      }
    });


    sliderRef.current.children[newSlideNumber + 1].classList.add(style.img__active);
    sliderRef.current.children[newSlideNumber + 1].classList.remove(style.img);

  }

  return (
    <section id="howWork">
      <div className={`${style.howWork__container} noselect`}>

        <div className={style.top__container}>
          <h1 className={`${style.top__title} title`}>Como a KAHS funciona</h1>
          <p className={style.top__description}>
            Traçamos a estratégia de marketing que mais <br /> funciona para o{" "}
            <strong>Seu Tipo de Negócio</strong>
          </p>
        </div>

        <RevealMe delay={300} origin="bottom">

          <div className={`${style.middle__container}`}>

            <div className={style.middle__box}>
              <span className={`${style.howWork__icon} material-icons-outlined`}>videocam</span>
              <p className={style.box__text}>Criação de conteúdo em alta qualidade</p>
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
              <p className={style.box__text}>Padronização da identidade</p>
              <p className={style.box__text}><strong>Visual da Marca</strong></p>
            </div>
          
          </div>

          <div className={`${style.iphone_slide_wrapper}`}>

            <div onClick={() => move("left")} className={`${style.icon__wrapper} ${style.icon__left}`}>
              <span className={`material-icons-outlined ${style.slider__icons}`}>arrow_back_ios</span>
            </div>

            <div ref={sliderRef} className={style.slider}>
              <img alt="iphone frame" loading="lazy" draggable={false} className={style.iphone__frame_img} src={iphone__frame} />

              {iphone__imgs.map((imgSrc, index) => {
                return (
                  <img alt="instagram pages" loading="lazy" draggable={false} className={`${index === 0 ? (style.img__active) : style.img}`} key={index} src={imgSrc} />
                )
              })}

            </div>

            <div onClick={() => move("right")} className={`${style.icon__wrapper} ${style.icon__right}`}>
              <span className={`material-icons-outlined ${style.slider__icons}`}>arrow_forward_ios</span>
            </div>

            <div className={style.dots}>
              {iphone__imgs.map((item, index) => {
                return (
                  <div onClick={() => move("", index)} key={index} className={`${style.dot} ${slideNumber === index ? style.dot__selected : ""}`}></div>
                );
              })}
            </div>

          </div>
        </RevealMe>

        <div className={style.bottom__container}>

          <div className={`${style.middle__box} ${style.box__3}`}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>insights</span>
            <p className={style.box__text}>Marketing estratégico para crescimento nas redes</p>
            <p className={style.box__text}>sociais, visando <strong>Objetivos do Cliente</strong></p>
          </div>

          <div className={`${style.middle__box} ${style.box__3}`}>
            <span className={`${style.howWork__icon} material-icons-outlined`}>add</span>
            <p className={style.box__text}>Apresenta resultados positivos já no primeiro</p>
            <p className={style.box__text}>mês de serviço, com <strong>Relatórios Semanais</strong></p>
          </div>

          <a href="#contact">
            <Button secondary label="Contato" />
          </a>

        </div>

      </div>
    </section>
  );
}
