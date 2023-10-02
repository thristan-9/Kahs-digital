import React from "react"
import style from '../styles/Button.module.css'


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    children?: React.ReactNode;
    label?: string;
    secondary?: boolean;
}

const Button = ({ label, disabled, children, secondary, ...props } : ButtonProps) => {
    return (
        <button type="button" disabled={disabled} className={`${style.btn} ${secondary ? style.secondary : ""}`} {...props} >
            {children || label}
        </button>
    )
}

export default Button;