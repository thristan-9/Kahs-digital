import { useRef, useState } from "react";
import style from "../../styles/Reviews.module.css";
import MousePosition from "../MousePosition";
import CountUp from "../CountUp";
import { client__1, client__2, client__3, client__4, client__logos } from "../../constants";


export default function Reviews() {

    const mousePosition = MousePosition();
    const blobRef = useRef<HTMLDivElement>(null);
    const [showCountUp, setShowCountUp] = useState(false);

    function moveBlob() {
        if (window.innerWidth < 1150) return;

        const mousePositionVerified = blobLimitVerify(mousePosition);

        if (blobRef && blobRef.current) {
            blobRef.current.animate({
                left: `${mousePositionVerified.x}px`,
                top: `${mousePositionVerified.y}px`
            }, { duration: 8500, fill: "forwards" })
        }
    }

    function blobLimitVerify(mousePosition: { x: number, y: number }) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const minX = (width / 2) - 120;
        const maxX = (width / 2) + 120;

        const minY = (height / 2) - 50;
        const maxY = (height / 2) + 50;

        if (mousePosition.x <= minX) {
            mousePosition.x = minX;
        } else if (mousePosition.x >= maxX) {
            mousePosition.x = maxX;
        }

        if (mousePosition.y <= minY) {
            mousePosition.y = minY;
        } else if (mousePosition.y >= maxY) {
            mousePosition.y = maxY;
        }

        return mousePosition;
    }

    return (
        <section onMouseEnter={() => setShowCountUp(true)} onMouseMove={() => moveBlob()} className={style.reviews} id="reviews">

            <div className={`${style.reviews__container} container`}>

                <h1 className={`${style.text__light_color} title`}>Feedbacks</h1>

                <div ref={blobRef} className={`${style.blob}`} />

                <div className={`${style.reviews__data} grid`}>

                    <div className={`${style.review__item}`}>
                        <div className={style.review__header}>
                            <img className={style.client__img} src={client__2.img} />
                            <div>
                                <h2 className={`${style.name} ${style.text__light_color}`}>{client__2.name}</h2>
                                <h3 className={`${style.business} ${style.text__light_color}`}>{client__2.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} ${style.text__light_color}`}>{client__2.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__item} ${style.show}`}>
                        <div className={style.review__header}>
                            <img className={style.client__img} src={client__3.img} />
                            <div>
                                <h2 className={`${style.name} ${style.text__light_color}`}>{client__3.name}</h2>
                                <h3 className={`${style.business} ${style.text__light_color}`}>{client__3.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} ${style.text__light_color}`}>{client__3.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__item} ${style.show}`}>
                        <div className={style.review__header}>
                            <img className={style.client__img} src={client__4.img} />
                            <div>
                                <h2 className={`${style.name} ${style.text__light_color}`}>{client__4.name}</h2>
                                <h3 className={`${style.business} ${style.text__light_color}`}>{client__4.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} ${style.text__light_color}`}>{client__4.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__wrap}`}>
                        <div className={`${style.review__item_small}`}>
                            <img className={style.client__img_small} src={client__3.img} />
                            <div className={`${style.review__data} grid`}>
                                <div>
                                    <h2 className={`${style.name__small} ${style.text__light_color}`}>{client__3.name}</h2>
                                    <h3 className={`${style.business__small} ${style.text__light_color}`}>{client__3.business}</h3>
                                </div>
                                <p className={`${style.feedback__small} ${style.text__light_color}`}>{client__3.feedback}</p>
                            </div>
                        </div>

                        <div className={`${style.review__item_small}`}>
                            <img className={style.client__img_small} src={client__4.img} />
                            <div className={`${style.review__data} grid`}>
                                <div>
                                    <h2 className={`${style.name__small} ${style.text__light_color}`}>{client__4.name}</h2>
                                    <h3 className={`${style.business__small} ${style.text__light_color}`}>{client__4.business}</h3>
                                </div>
                                <p className={`${style.feedback__small} ${style.text__light_color}`}>{client__4.feedback}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${style.brand__wrapper}`}>
                        <div className={`${style.square__wrapper} grid`}>
                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        {showCountUp ? <CountUp timer={15} end={1050}/> : 0} 
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                    </p>
                                    <p className={style.square__text}>Visualizaçoes Organicas</p>
                                </div>
                            </div>

                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        {showCountUp ? <CountUp timer={25} end={100} /> : 0}
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                    </p>
                                    <p className={style.square__text}>Posts Feitos</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.logos__wrapper}>
                            <div className={`${style.logos}`}>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`${style.review__item}`}>
                        <div className={style.review__header}>
                            <img className={style.client__img} src={client__1.img} />
                            <div>
                                <h2 className={`${style.name} ${style.text__light_color}`}>{client__1.name}</h2>
                                <h3 className={`${style.business} ${style.text__light_color}`}>{client__1.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} ${style.text__light_color}`}>{client__1.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.brand__wrapper} ${style.show}`}>
                        <div className={`${style.square__wrapper} grid`}>
                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        <CountUp timer={15} end={1050} />
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                    </p>
                                    <p className={style.square__text}>Visualizaçoes Organicas</p>
                                </div>
                            </div>

                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        <CountUp timer={25} end={100} />
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                    </p>
                                    <p className={style.square__text}>Posts Feitos</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.logos__wrapper}>
                            <div className={`${style.logos}`}>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>

        </section>
    );
}