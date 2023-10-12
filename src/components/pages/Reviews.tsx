import style from "../../styles/Reviews.module.css";
import { reviews } from "../../constants";

export default function Reviews() {

    return (
        <section id="reviews">

            <div className={`${style.reviews__container} container grid`}>

                <h1 className={`${style.reviews__title} title`}>Reviews</h1>

                <div className={`${style.services__data}`}>

                    {reviews.map((item, index) => {
                        return (
                           <div></div>
                        )
                    })}

                </div>
            </div>

        </section>
    );
}