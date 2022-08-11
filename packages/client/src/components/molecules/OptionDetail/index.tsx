import styled from '@emotion/styled'
import React, { useState } from 'react'
import { TOptionDetail } from 'utils/types'
import IconUnchecked from '../../../utils/images/unchecked.svg'
import IconChecked from '../../../utils/images/checked.svg'

interface SelectedProps {
  optionId: number
  option: TOptionDetail
}

interface Props {
  details: TOptionDetail[]
  optionId: number
  handleSelectedOption(option: SelectedProps): void
}

const OptionDetail: React.FC<Props> = ({
  details,
  optionId,
  handleSelectedOption,
}) => {
  const [checkedOption, setCheckedOption] = useState(details[0].id)

  const clickEvent = (
    id: number,
    optionId: number,
    name: string,
    price: number,
  ) => {
    const data = { optionId, option: { id, name, price } }
    handleSelectedOption(data)
    setCheckedOption(id)
  }

  return (
    <>
      {details.map(({ id, name, price }) => (
        <OptionWrapper
          key={`detail.${id}`}
          onClick={() => clickEvent(id, optionId, name, price)}
          data-testid={`option-detail-${id}`}>
          <Div>
            {checkedOption === id ? (
              <img src={IconChecked} alt={'IconChecked'} />
            ) : (
              <img src={IconUnchecked} alt={'IconUnChecked'} />
            )}
          </Div>
          <Div>{name}</Div>
          <Div>{price.toLocaleString()}원</Div>
        </OptionWrapper>
      ))}
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
