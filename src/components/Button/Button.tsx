import React, { FC, ButtonHTMLAttributes } from "react"
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  value ?: string,
  name: string,
}

const Button: FC<ButtonProps> = ({ name, value, ...props }) => {
  return (
    <div>
      <button name={name} id={name} className="bt" {...props}>{value}</button>
    </div>
    
  )
}

export default Button