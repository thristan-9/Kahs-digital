import { useRef } from "react";
import style from "../../styles/Faqs.module.css";
import { faqs } from "../../constants";

export default function Faqs() {

    const refSlide = useRef([]);

    function moveLeft() {
        if (refSlide?.current) {
            console.log("refSlide.current.index", refSlide.current.key)
        }
    }

    function moveRight() {
        if (refSlide?.current) {
            const index = refSlide.current;
            console.log("index", index)
        }
    }

    return (
        <section id="faqs" className={style.faqs}>
            <div className={`${style.faqs__container} container`}>
                
                <div className={`${style.faqs__data}`}>

                    <div onClick={() => moveLeft()} className={`${style.icon__wrapper} ${style.icon__left}`}>
                        <span className={`material-icons-outlined icon ` + style.faqs__icon}>arrow_back_ios</span>
                    </div>

                    <div onClick={()=> moveRight()} className={`${style.icon__wrapper} ${style.icon__right}`}>
                        <span className={`material-icons-outlined icon ` + style.faqs__icon}>arrow_forward_ios</span>
                    </div>

                    <div className={style.slider}>
                        <ul>
                            {faqs.map((item, index) => {
                                return (
                                    <li ref={el => refSlide.current[index] = el} id={"faqs-slide-" + (index + 1)} key={index}>
                                        <h1 className={style.slide__title}>
                                            {item.question}
                                        </h1>
                                        <div className={style.slide__description_center}>
                                            <h3 className={style.slide__description}>
                                                {item.answer}
                                            </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    <div className={style.dots}>
                        <a className={style.dot} href="#faqs-slide-1"></a>
                        <a className={style.dot} href="#faqs-slide-2"></a>
                        <a className={style.dot} href="#faqs-slide-3"></a>
                    </div>

                </div>
            </div>
        </section>
    );
}
