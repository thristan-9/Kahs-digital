import {useEffect, useState} from 'react' 
import style from "../styles/ScrollUpButton.module.css";



export default function ScrollUpButton() {

    const [scrollUpBtn, setScrollUpBtn] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 300) {
                setScrollUpBtn(true);
            } else {
                setScrollUpBtn(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <span onClick={() => scrollUp()} className={`material-icons-outlined ${style.scrollUp__icon} ${scrollUpBtn && style.show__btn} noselect`}>arrow_circle_up</span>
        </div>
    );
}