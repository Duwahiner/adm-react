import styled from "styled-components";

export const ContainerButton = styled.div`
  width: 100%;
  max-width: 320px;
  margin-top: 8px;
  margin-bottom: 20px;

  * {
    box-sizing: border-box;
  }
`

interface ButtonProps {
  bgColor: string;
}

export const Button = styled.div<ButtonProps>`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 10px 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, bgColor }) => bgColor};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #1970B5;
  }
`