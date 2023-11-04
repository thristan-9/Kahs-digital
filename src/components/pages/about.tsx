import style from '../../styles/About.module.css'
import logo from '../../assets/kahs_logo.png'

export default function About() {
    return (
        <section id='about'>
            <div className={`${style.about__container}`}>           

                <div className={style.about__wrapper}>

                    <img className={style.logo} src={logo} />  

                    <div className={`${style.about__data}`}>
                    
                        <h1 className={style.about__title}>
                            Sobre
                        </h1>

                        <p className={style.about__description}>
                            A KAHS DIGITAL é uma empresa especializada em gerenciamento de midias sociais com sede em Jaraguá do Sul, SC.
                        </p>
                        <p className={style.about__description}>
                            Com uma paixão por ajudar as empresas a prosperar no mundo digital, fornecendo serviços que abrangem desde postagens até a criação e edição de conteúdo digital e tráfego pago.
                        </p>
                        <p className={style.about__description}>
                            Quer você seja uma pequena startup ou uma empresa bem estabelecida, temos o conhecimento e a experiência para elevar sua presença online e atingir seus objetivos de negócios.
                        </p>

                    </div>

                </div>


            </div>
        </section>
    )
}