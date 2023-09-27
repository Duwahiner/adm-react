import { FC, useState, ChangeEvent, MouseEvent } from "react"

import { Button } from "components/Button"
import { Hello } from "components/Hello"
import { Input } from "components/Input"
import { Title } from "components/Title"

import './styles/index.css'
import { Render } from "components/Render"

export const Home: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target // 

    setValue(target.value)
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(value)
  }

  return (
    <div className="home-contaiiner">
      <Title title="Bienvenido a la capacitación de react" />
      <div className="home-box-render">
        <Render />
      </div>

      <div className="home-box">
        <Hello message={value} />
        <Input handleChange={handleChange} />
        <Button handleClick={handleClick} />
      </div>
    </div>
  )
}