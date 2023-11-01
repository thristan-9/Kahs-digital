import style from "../../styles/Services.module.css";
import { services } from "../../constants";

export default function Services() {

    return (
        <section id="services">
            <div className={`${style.service__container} container grid`}>

                <h1 className={`title`}>Serviços</h1>

                <div className={`${style.services__data} grid`}>

                    {services.map((item, index) => {
                        return (
                            <div key={index} className={`${style.card} ${index & 1 && style.right__card}`}>
                                <div className={`${style.card__content} grid`}>
                                    <h1 className={`light__text`}>
                                        {item.title}
                                    </h1>
                                    <p className={`${style.service__description} light__text`}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
}