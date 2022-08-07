import { TMenuOption } from 'types'
import React from 'react'
import OptionDetail from 'components/OptionDetail'
import styled from '@emotion/styled'
import checked from '../../images/checked.svg'
import unchecked from '../../images/unchecked.svg'

interface Props {
  options: TMenuOption[]
}

const MenuOption: React.FC<Props> = ({ options }) => {
  return (
    <>
      {options.map(({ detail, name }) => (
        <>
          {name}
          {detail.map(({ id, name, price }) => (
            <OptionWrapper data-id={id}>
              <div>
                <img src={unchecked} />
                <img src={checked} />
              </div>
              <Span>{name}</Span>
              <Span>{price.toLocaleString()}</Span>
            </OptionWrapper>
          ))}
        </>
      ))}
    </>
  )
}

const OptionWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`

const Span = styled.span`
  margin: 5px;
`

export default MenuOption
