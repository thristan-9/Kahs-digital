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
            }, {duration: 10000, fill: "forwards"})
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
        <section id="reviews">
            
            <div onMouseMove={() => moveBlob()} className={`${style.reviews__container}`}>

                <h1 className={`${style.reviews__title} title`}>Feedbacks</h1>

                <div ref={blobRef} className={`${style.blob}`} />

                <div className={`${style.reviews__data} grid`}>    
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>

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