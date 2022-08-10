import { TMenuOption } from 'utils/types'
import React from 'react'
import styled from '@emotion/styled'
import OptionDetail from 'components/molecules/OptionDetail'

interface Props {
  options: TMenuOption[]
}

const MenuOption: React.FC<Props> = ({ options }) => {
  return (
    <OptionContainer>
      {options.map(({ name, details, id }, index) => (
        <div key={`${index}${id}`}>
          <Span>{name}</Span>
          <OptionDetail details={details}></OptionDetail>
        </div>
      ))}
    </OptionContainer>
  )
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 30px;
  justify-content: center;
`

const Span = styled.span`
  margin-left: 10px;
  font-size: 18px;
`

export default MenuOption
