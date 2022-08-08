import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { TOptionDetail } from 'types'
import IconUnchecked from '../../images/unchecked.svg'
import IconChecked from '../../images/checked.svg'

interface Props {
  option: TOptionDetail
  selectedOption: { optionId: number; detailId: number }
  onClickSelectedOption(id: number): void
}

const OptionDetail: React.FC<Props> = ({
  option,
  selectedOption,
  onClickSelectedOption,
}) => {
  const [toggle, setToggle] = useState(selectedOption)
  const [soption, setSoption] = useState(0)

  const ClickSelectedOption = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { id } = (e.currentTarget as HTMLElement).dataset
      console.log(id)
      setSoption(Number(id))
    },
    [selectedOption],
  )

  const { id, name, price } = option

  return (
    <>
      <OptionWrapper>
        <Div onClick={() => onClickSelectedOption(id)}>
          <img
            src={selectedOption.detailId === id ? IconChecked : IconUnchecked}
            alt={name}
          />
        </Div>

        <Div>{name}</Div>
        <Div>{price.toLocaleString()}원</Div>
      </OptionWrapper>
    </>
  )
}

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin: 10px;
`

const Div = styled.span`
  margin-left: 10px;
  font-size: 18px;
`

export default OptionDetail
