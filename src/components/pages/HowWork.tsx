import style from '../../styles/HowWork.module.css'
import iphone__frame from '../../assets/iphone__frame.png'
import iphone__img_1 from '../../assets/iphone__img_1.png'

export default function HowWork() {
    return (
        <section>
            <div className={`${style.howWork__container}`}>

                <div className={style.top__container}>
                    <h1 className={style.top__title}>
                        Como a KAHS funciona
                    </h1>
                    <p className={style.top__description}>
                        Traçamos a estrategia de marketing que mais <br /> funciona para o  Seu Tipo de Negócio 
                    </p>
                </div>

               

                <div className={style.middle__container}>

                    <div className={style.iphone__frame}>
                        <img className={style.iphone__frame_img} src={iphone__frame}/>

                        <div className={style.iphone__img_container}>
                            <img className={style.iphone__img} src={iphone__img_1}/>
                        </div>
                    </div>

                </div>

                <div className={style.bottom__container}>

                </div>

            </div>
        </section>
    )
}