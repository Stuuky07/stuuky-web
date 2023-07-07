import { FC } from "react"

/*type inputProps = {
    placeholder: string
}*/

interface InputProps extends React.InputHTMLAttributes <HTMLInputElement> {
    placeholder ?: string
}

const Input : FC<InputProps> = ({...props }) => {
    return(
        <div>
            <input {...props}/>
        </div>
    )
}

export default Input