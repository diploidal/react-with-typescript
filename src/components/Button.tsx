import React from "react";

type Props = {
  // onClick(): string            | method returns string
  // onClick(text: string): void  | method with params, returns nothing
  // onClick: (text: string) => void  | function with params, returns nothing
  onClick: (text: string) => void  // | function with params
}

export const Button = ({onClick}: Props) => {
  return <button onClick={() => onClick('hi')}>Click me</button>
};