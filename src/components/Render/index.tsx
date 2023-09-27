import { FC } from "react"

import { ContainerRender } from "./styled"
import { RenderProps } from "types/components/render"

export const Render: FC<RenderProps> = () => {
  return (
    <ContainerRender className="Render-container" >
      <h3 className="Render-title"> Renderizado condicional </h3>
    </ContainerRender>
  )
}