import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { TOptionDetail } from 'types'
import IconUnchecked from '../../images/unchecked.svg'
import IconChecked from '../../images/checked.svg'

interface Props {
  option: TOptionDetail
  selectedOption: { optionId: number; detailId: number }
  onClickSelectedOption(id: number): void
  index: number
}

const OptionDetail: React.FC<Props> = ({
  option,
  selectedOption,
  onClickSelectedOption,
  index,
}) => {
  const { id, name, price } = option

  console.log(selectedOption.detailId)

  return (
    <>
      <OptionWrapper>
        {selectedOption.detailId === 0 ? (
          <>
            <Div onClick={() => onClickSelectedOption(id)}>
              <img src={index === 0 ? IconChecked : IconUnchecked} alt={name} />
            </Div>
          </>
        ) : (
          <Div onClick={() => onClickSelectedOption(id)}>
            <img
              src={selectedOption.detailId === id ? IconChecked : IconUnchecked}
              alt={name}
            />
          </Div>
        )}

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
