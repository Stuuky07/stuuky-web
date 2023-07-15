import { InputHTMLAttributes, forwardRef } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    id: string,
    errorMessage: string | undefined,
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({ errorMessage, id, placeholder, ...props }, ref) {
        return (
            <>
                <div className='input-div'>
                    <input id={id} placeholder=" " className={`${errorMessage && 'error'}`} ref={ref} {...props} />
                    <label htmlFor={id} >{placeholder}</label>
                </div>
                {errorMessage && <span className='error-span'>{errorMessage}</span>}
            </>
        )
    }
)

export default Input