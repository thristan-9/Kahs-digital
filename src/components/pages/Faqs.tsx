import { useRef, useState, useEffect } from "react";
import style from "../../styles/Faqs.module.css";
import { faqs } from "../../constants";
import RevealMe from "../RevealMe";


export default function Faqs() {

    const [slideNumber, setSlideNumber] = useState(0);
    const sliderRef = useRef(null);

    function move(direction, index) {
        let newSlideNumber = index;
        const totalNoofSlides = sliderRef.current.children.length - 1;

        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1
        }
        else if (direction === "right") {
            newSlideNumber = slideNumber === totalNoofSlides ? 0 : slideNumber + 1
        }

        Array.from(sliderRef.current.children).forEach((slide) => {
            slide.classList.remove(style.slide__active);
            slide.classList.remove(style.slide__animation_right);
            slide.classList.remove(style.slide__animation_left);
            slide.classList.add(style.slide);
        });

        //animation
        if (direction === "right") {
            sliderRef.current.children[newSlideNumber].classList.add(style.slide__animation_right);
        } else if (direction === "left") {
            sliderRef.current.children[newSlideNumber].classList.add(style.slide__animation_left);
        } else {
            if (newSlideNumber >= slideNumber) {
                sliderRef.current.children[newSlideNumber].classList.add(style.slide__animation_right);
            } else if (newSlideNumber <= slideNumber) {
                sliderRef.current.children[newSlideNumber].classList.add(style.slide__animation_left);
            }
        }

        setSlideNumber(newSlideNumber);

        sliderRef.current.children[newSlideNumber].classList.add(style.slide__active);
        sliderRef.current.children[newSlideNumber].classList.remove(style.slide);

    }

    return (
        <section id="faqs" className={style.faqs}>
            <div className={`${style.faqs__container} container`}>

                <div className={`${style.faqs__data}`}>

                    <RevealMe origin="left">

                        <div onClick={() => move("left")} className={`${style.icon__wrapper} ${style.icon__left} noselect`}>
                            <span className={`material-icons-outlined ${style.faqs__icon}`}>arrow_back_ios</span>
                        </div>

                        <div ref={sliderRef} className={style.slider}>
                            {faqs.map((item, index) => {
                                return (
                                    <div className={`${index === 0 ? (style.slide__active + " " + style.slide__animation_right) : style.slide}`} key={index}>
                                        <h2 className={style.slide__title}>
                                            {item.question}
                                        </h2>
                                        <div className={style.slide__description_center}>
                                            <p className={style.slide__description}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div onClick={() => move("right")} className={`${style.icon__wrapper} ${style.icon__right} noselect`}>
                            <span className={`material-icons-outlined ${style.faqs__icon}`}>arrow_forward_ios</span>
                        </div>

                        <div className={`${style.dots} noselect`}>
                            {faqs.map((item, index) => {
                                return (
                                    <div onClick={() => move("", index)} key={index} className={`${style.dot} ${slideNumber === index ? style.dot__selected : ""}`}></div>
                                );
                            })}
                        </div>

                    </RevealMe>

                </div>
            </div>
        </section>
    );
}
