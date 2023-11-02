import { useRef } from "react";
import style from "../../styles/Faqs.module.css";
import { faqs } from "../../constants";

export default function Faqs() {

    const dotRef1 = useRef();
    const dotRef2 = useRef();
    const dotRef3 = useRef();

    function move(direction) {
        const currentUrl = window.location.href;
        let questionSelected = currentUrl.split('#')[1];

        if (questionSelected?.search("faqs-slide") < 0) {
            questionSelected = undefined;
        }

        switch (questionSelected) {
            case "faqs-slide-1":
                if (direction == "right") {
                    dotRef2.current.click();
                } else {
                    dotRef3.current.click();
                }
            break;
            case "faqs-slide-2":
                if (direction == "right") {
                    dotRef3.current.click();
                } else {
                    dotRef1.current.click();
                }
            break;
            case "faqs-slide-3":
                if (direction == "left") {
                    dotRef2.current.click();
                } else {
                    dotRef1.current.click();
                }
            break;
            case undefined:
                if (direction == "right" && dotRef2?.current) {
                    dotRef2.current.click();
                } else {
                    dotRef3.current.click();
                }
            break;
        }
        
    }

    return (
        <section id="faqs" className={style.faqs}>
            <div className={`${style.faqs__container} container`}>
                
                <div className={`${style.faqs__data}`}>

                    <div onClick={() => move("left")} className={`${style.icon__wrapper} ${style.icon__left}`}>
                        <span className={`material-icons-outlined ${style.faqs__icon}`}>arrow_back_ios</span>
                    </div>

                    <div onClick={() => move("right")} className={`${style.icon__wrapper} ${style.icon__right}`}>
                        <span className={`material-icons-outlined ${style.faqs__icon}`}>arrow_forward_ios</span>
                    </div>

                    <div className={style.slider}>
                        <ul>
                            {faqs.map((item, index) => {
                                return (
                                    <li id={"faqs-slide-" + (index + 1)} key={index}>
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
                        <a ref={dotRef1} className={style.dot} href="#faqs-slide-1"></a>
                        <a ref={dotRef2} className={style.dot} href="#faqs-slide-2"></a>
                        <a ref={dotRef3} className={style.dot} href="#faqs-slide-3"></a>
                    </div>

                </div>
            </div>
        </section>
    );
}
