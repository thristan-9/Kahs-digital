import React from "react"
import style from '../styles/button.module.css'


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    label?: string;
}

const Button = ({ label, disabled, ...props } : ButtonProps) => {
    return (
        <button disabled={disabled} className={style.btn} {...props} >
            {label}
        </button>
    )
}

export default Button;