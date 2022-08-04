import React, { CSSProperties } from 'react'
import { theme } from '../../styles/index'
import styled from '@emotion/styled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  style?: CSSProperties
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  style,
  onClick,
  children,
}) => {
  return (
    <>
      <EButton disabled={disabled} onClick={onClick} style={{ ...style }}>
        {children}
      </EButton>
    </>
  )
}

const EButton = styled.button`
  cursor: pointer;
  background-color: ${theme.PRIMARY1};
  width: 233px;
  height: 164px;
  border-radius: 20px;
`

export default Button
