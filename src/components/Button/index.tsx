import { FC } from "react"

import './styles/index.css'
import { ButtonProps } from "types/components/button"

export const Button: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div className="button-container">
      <button className="button-button-adds" onClick={handleClick}>
        Agregar
      </button>
    </div>
  )
}