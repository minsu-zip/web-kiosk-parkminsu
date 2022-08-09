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
  ...props
}) => {
  return (
    <>
      <EButton
        disabled={disabled}
        onClick={onClick}
        style={{ ...style }}
        {...props}>
        {children}
      </EButton>
    </>
  )
}

const EButton = styled.button`
  /* min-width: 240px; */
  height: 100px;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.2s;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.PRIMARY1};
  &:active {
    filter: brightness(80%);
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.OFF_WHITE};
    background-color: ${({ theme }) => theme.PRIMARY1};
  }
`

export default React.memo(Button)
