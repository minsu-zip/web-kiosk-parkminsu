import { TMenuOption } from 'types'
import React from 'react'
import styled from '@emotion/styled'
import unchecked from '../../images/unchecked.svg'

interface Props {
  options: TMenuOption[]
}

const MenuOption: React.FC<Props> = ({ options }) => {
  return (
    <>
      <OptionContainer>
        {options.map(({ detail, name }) => (
          <>
            <Div>{name}</Div>
            {detail.map(({ id, name, price }) => (
              <OptionWrapper data-id={id}>
                <Div>
                  <img src={unchecked} />
                </Div>

                <Div>{name}</Div>
                <Div>{price.toLocaleString()}원</Div>
              </OptionWrapper>
            ))}
          </>
        ))}
      </OptionContainer>
    </>
  )
}
const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 30px;
  margin-top: 30px;
`

const OptionWrapper = styled.div`
  flex-direction: column;
  height: 50px;
  align-items: center;
  margin: 10px;
`

const Div = styled.span`
  margin-left: 10px;
`
export default MenuOption
