import {useRef} from "react";
import style from "../../styles/Reviews.module.css";
import MousePosition from "../MousePosition";
import { reviews } from "../../constants";

export default function Reviews() {

    const mousePosition = MousePosition();
    const blobRef = useRef<HTMLDivElement>(null);

    function moveBlob() {

        if (window.innerWidth < 1150) return;

        const mousePositionVerified = blobLimitVerify(mousePosition);
        
        if (blobRef && blobRef.current) {
            blobRef.current.animate({
                left: `${mousePositionVerified.x}px`,
                top: `${mousePositionVerified.y}px`
            }, {duration: 3000, fill: "forwards"})
        }
    }

    function blobLimitVerify(mousePosition: {x: number, y: number}) {
        const minX = 900;
        const maxX = 1250;

        const minY = 400;
        const maxY = 700;

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
        <section onMouseMove={() => moveBlob()} id="reviews">
            
            <div className={`${style.reviews__container}`}>

                <h1 className={`${style.reviews__title} title`}>Feedbacks</h1>

                <div className={`${style.reviews__data}`}>
                
                    <div ref={blobRef} className={`${style.blob}`}></div>


                    {/* {reviews.map((item, index) => {
                        return (
                        <div></div>
                        )
                    })} */}

                </div>

            </div>

        </section>
    );
}