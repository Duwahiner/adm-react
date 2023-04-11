import { FC } from "react"
import { TitleProps } from "types/components/title"

import './styles/index.css'

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="title-container">
      <h1 className="title-title-h1">
        { title ? title : 'Bienvenido' }
      </h1>
    </div>
  )
}