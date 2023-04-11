import { FC } from "react"

import { InputProps } from "types/components/input"

import './styles/index.css'

export const Input: FC<InputProps> = ({ handleChange }) => {
  return (
    <div className="input-container">
      <input placeholder="Ingrese algo" className="input-input-type-text" type='text' onChange={handleChange} />
    </div>
  )
}