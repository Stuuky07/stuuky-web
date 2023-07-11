import React, { FC, ButtonHTMLAttributes } from "react"
import './Button.scss'
import { montserrat } from "@/utils/fonts/font"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  value: string,
  name: string,
}

const Button: FC<ButtonProps> = ({ name, value, ...props }) => {
  return (
    <div>
      <button name={name} id={name} className={`${montserrat.className} btn`} {...props}>{value}</button>
    </div>
    
  )
}

export default Button