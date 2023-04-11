import { ChangeEvent } from "react";

export interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}
