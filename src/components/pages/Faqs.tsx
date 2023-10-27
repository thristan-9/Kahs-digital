import style from "../../styles/Faqs.module.css";
import { faqs } from "../../constants";

export default function Faqs() {
    return (
        <section id="faqs" className={style.faqs}>
            <div className={`${style.faqs__container}  grid`}>
                <div className={`${style.faqs__data}`}>

                    <div className={style.slider}>
                        <div className={style.icon__wrapper}>
                            <span className={`material-icons-outlined icon ` + style.faqs__icon}>arrow_back_ios</span>
                        </div>
                        {faqs.map((item, index) => {
                            return (
                                <div id={"faqs-slide-" + (index + 1)} key={index} className={style.slide}>
                                    <h1 className={style.slide__title}>
                                        {item.question}
                                    </h1>

                                    <h3 className={style.slide__description}>
                                        {item.answer}
                                    </h3>
                                </div>
                            )
                        })}
                        {/* <div className={style.icon__wrapper}>
                            <span className="material-icons-outlined icon">arrow_forward_ios</span>
                        </div> */}
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
