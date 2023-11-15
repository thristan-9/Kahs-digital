import { useRef, useState } from "react";
import style from "../../styles/Reviews.module.css";
import MousePosition from "../MousePosition";
import CountUp from "../CountUp";
import { client__1, client__2, client__3, client__4, client__logos } from "../../constants";
import RevealMe from "../RevealMe";



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

        const minX = (width / 2) - 150;
        const maxX = (width / 2) + 150;

        const minY = (height / 2) - 50;
        const maxY = (height / 2) + 150;

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
        <section onMouseEnter={() => {
            setTimeout(() => {
                setShowCountUp(true)
            }, 500);
        }} onMouseMove={() => moveBlob()} className={`${style.reviews} noselect`} id="reviews">


            <div className={`${style.reviews__container} container`}>

                <RevealMe delay={600} style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                }} origin="bottom">
                    <div ref={blobRef} className={`${style.blob}`} />
                </RevealMe>

                <div className={`${style.blur}`} />

                <h1 className={`${style.reviews__title} light__text title`}>Feedbacks</h1>

                <div className={`${style.reviews__data} grid`}>

                    <div className={`${style.review__item}`}>
                        <div className={style.review__header}>
                            <img alt="client" loading="lazy" draggable={false} className={style.client__img} src={client__2.img} />
                            <div>
                                <h2 className={`${style.name} light__text`}>{client__2.name}</h2>
                                <h3 className={`${style.business} light__text`}>{client__2.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} light__text`}>{client__2.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__item} ${style.show}`}>
                        <div className={style.review__header}>
                            <img alt="client" loading="lazy" draggable={false} className={style.client__img} src={client__3.img} />
                            <div>
                                <h2 className={`${style.name} light__text`}>{client__3.name}</h2>
                                <h3 className={`${style.business} light__text`}>{client__3.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} light__text`}>{client__3.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__item} ${style.show}`}>
                        <div className={style.review__header}>
                            <img alt="client" loading="lazy" draggable={false} className={style.client__img} src={client__4.img} />
                            <div>
                                <h2 className={`${style.name} light__text`}>{client__4.name}</h2>
                                <h3 className={`${style.business} light__text`}>{client__4.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} light__text`}>{client__4.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.review__wrap}`}>
                        <div className={`${style.review__item_small}`}>
                            <img alt="client" loading="lazy" draggable={false} className={style.client__img_small} src={client__3.img} />
                            <div className={`${style.review__data} grid`}>
                                <div>
                                    <h2 className={`${style.name__small} light__text`}>{client__3.name}</h2>
                                    <h3 className={`${style.business__small} light__text`}>{client__3.business}</h3>
                                </div>
                                <p className={`${style.feedback__small} light__text`}>{client__3.feedback}</p>
                            </div>
                        </div>

                        <div className={`${style.review__item_small}`}>
                            <img alt="client" loading="lazy" draggable={false} className={style.client__img_small} src={client__4.img} />
                            <div className={`${style.review__data} grid`}>
                                <div>
                                    <h2 className={`${style.name__small} light__text`}>{client__4.name}</h2>
                                    <h3 className={`${style.business__small} light__text`}>{client__4.business}</h3>
                                </div>
                                <p className={`${style.feedback__small} light__text`}>{client__4.feedback}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${style.brand__wrapper}`}>
                        <div className={`${style.square__wrapper} grid`}>
                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                        {showCountUp ? <CountUp timer={30} end={50} /> : 0}
                                    </p>
                                    <p className={style.square__text}>Clientes<br/> Satisfeitos</p>
                                </div>
                            </div>

                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        {showCountUp ? <CountUp timer={15} end={17000} /> : 0}
                                    </p>
                                    <p className={style.square__text}>Visualizações em 24 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.logos__wrapper}>
                            <div className={`${style.logos}`}>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img alt="client logo" draggable={false} src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img alt="client logo" loading="lazy" draggable={false} src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`${style.review__item}`}>
                        <div className={style.review__header}>
                            <img alt="client" draggable={false} className={style.client__img} src={client__1.img} />
                            <div>
                                <h2 className={`${style.name} light__text`}>{client__1.name}</h2>
                                <h3 className={`${style.business} light__text`}>{client__1.business}</h3>
                            </div>
                        </div>
                        <div className={style.review__body}>
                            <p className={`${style.feedback} light__text`}>{client__1.feedback}</p>
                        </div>
                    </div>

                    <div className={`${style.brand__wrapper} ${style.show}`}>
                        <div className={`${style.square__wrapper} grid`}>
                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        <span className={`material-icons-outlined ${style.square__icon}`}>add</span>
                                        <CountUp timer={30} end={50} />
                                    </p>
                                    <p className={style.square__text}>Clientes Satisfeitos</p>
                                </div>
                            </div>

                            <div className={`${style.square}`}>
                                <div>
                                    <p className={style.square__number}>
                                        <CountUp timer={15} end={17000} />
                                    </p>
                                    <p className={style.square__text}>Visualizações em 24 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.logos__wrapper}>
                            <div className={`${style.logos}`}>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img alt="client logo" loading="lazy" draggable={false} src={imgSource} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={`${style.slider}`}>
                                    {client__logos.map((imgSource, index) => {
                                        return (
                                            <div key={index}>
                                                <img alt="client logo" loading="lazy" draggable={false} src={imgSource} />
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