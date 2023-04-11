import { MouseEvent } from "react";

export interface ButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
