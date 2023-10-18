import React from 'react'
import * as Styled from './Button.styles'

type ButtonProps = {
  children: React.ReactNode,
  onClick: () => {}
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>{children}</Styled.Button>
  )
};

export default Button;