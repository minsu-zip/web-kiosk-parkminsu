import styled from '@emotion/styled'
import React from 'react'
import { theme } from 'utils/styles/index'

const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
`

interface Props {
  size?: number
  loading?: boolean
}

const Spinner: React.FC<Props> = ({ size = 128, loading = true, ...props }) => {
  const sizeStyle = {
    width: size,
    height: size,
  }

  return loading ? (
    <Icon>
      <svg
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        style={sizeStyle}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              stroke={theme.LABEL}
              strokeWidth="2">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
            <circle fill={theme.LABEL} cx="36" cy="18" r="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </Icon>
  ) : null
}

export default React.memo(Spinner)
