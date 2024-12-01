import { useState, useEffect } from "react";
import style from '../../styles/About.module.css'
import cellphone from '../../assets/iphone__img_insta.webp'
import RevealMe from '../RevealMe'

export default function About() {

    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPage(true);
        }, 150);
    }, []);

    return (
        <section id='about'>

            <div className={`${style.about__container} ${showPage ? undefined : style.hidden} noselect`}>

                <RevealMe duration={1000} delay={0} origin="left" reset>
                    <div className={style.about__wrapper}>

                        <img alt="cellphone" draggable={false} className={style.cell__phone} src={cellphone} />

                        <div className={`${style.about__data}`}>

                            <h1 className={style.about__title}>
                                Sobre
                            </h1>

                            <p className={style.about__description}>
                                A KAHS DIGITAL é uma empresa especializada em gerenciamento de Mídias sociais com sede em Jaraguá do Sul, SC.
                            </p>
                            <p className={style.about__description}>
                                Com uma paixão por ajudar as empresas a prosperar no mundo digital, fornecendo serviços que abrangem desde postagens até a criação e edição de conteúdo digital e tráfego pago.
                            </p>
                            <p className={style.about__description}>
                                Quer você seja uma pequena startup ou uma empresa de porte maior, temos o conhecimento e a experiência para elevar sua presença online e atingir seus objetivos de negócios.
                            </p>

                        </div>

                    </div>
                </RevealMe>

            </div>
        </section>
    )
}
