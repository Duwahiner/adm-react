import { FC } from "react"

import { HelloProps } from "types/components/hello"

import './styles/index.css'

export const Hello: FC<HelloProps> = ({ message }) => {
  return (
    <div className="hello-container">
      <span className="hello-description-span">
        Hola: <strong> { message } </strong>
      </span>
    </div>
  )
}