import React from "react";

type Props = {
  // onClick: (e: React.MouseEvent) => void  // Basic MouseEvent
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void  // Basic MouseEvent
}

export const Button = ({onClick}: Props) => {
  return <button onClick={onClick}>Click me</button>
};