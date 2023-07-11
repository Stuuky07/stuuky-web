import { FC } from "react"
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes <HTMLInputElement> {
    placeholder: string,
    name: string,
}

const Input : FC<InputProps> = ({name, placeholder, ...props }) => {
    return(
        <div>
            <input id={name} placeholder=" " {...props}/>
            <label htmlFor={name} >{placeholder}</label>
        </div>
    )
}

export default Input