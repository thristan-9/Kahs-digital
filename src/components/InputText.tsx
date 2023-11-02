import React, {useState} from "react"
import style from '../styles/InputText.module.css'


interface InputProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    label?: string;
    secondary?: boolean;
}

const InputText = ({ label, disabled, secondary, ...props }: InputProps) => {

    const [inputValue, setInputValue] = useState(undefined)

    function onChangeInput(e) {
        setInputValue(e.target.value);
        if (props.onChange) {
            props.onChange();
        }
    }

    return (
        <div className={style.input__data}>
            <input onChange={(e) => onChangeInput(e)} type="text" disabled={disabled} {...props} />
            <label className={`${inputValue ? style.input__active : undefined}`}>{label}</label>
        </div>
    )
}

export default InputText;