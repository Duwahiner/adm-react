import { FC } from "react"
import { useTheme } from 'styled-components'

import { ButtonProps } from "types/components/button"
import { ContainerButton, Button as BT } from "./styled"

export const Button: FC<ButtonProps> = ({ handleClick }) => {
  const theme = useTheme()

  return (
    <ContainerButton className="button-container" >
      <BT bgColor={theme.colors.primary} className="button-button-adds" onClick={() => handleClick}>
        Agregar
      </BT>
    </ContainerButton>
  )
}