import style from "../../styles/Services.module.css";
import { services } from "../../constants";

export default function Services() {

    return (
        <section id="services">
            <div className={`${style.service__container} container grid`}>

                <h1 className={`title`}>Serviços</h1>

                <div className={`${style.services__data}`}>

                    {services.map((item, index) => {
                        return (
                            <div key={index} className={`${style.service_row} ${index & 1 ? style.invert__row_data : ""}`}>

                                <img className={`${style.service__img}`} src={item.img} />

                                <div className={`${style.service_info} grid`}>
                                    <h2>
                                        {item.title}
                                    </h2>
                                    <p className={`${style.service__description}`}>
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