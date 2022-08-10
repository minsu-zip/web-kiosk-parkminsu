import styled from '@emotion/styled'
import React, { useState } from 'react'
import { TOptionDetail } from 'utils/types'
import IconUnchecked from '../../../utils/images/unchecked.svg'
import IconChecked from '../../../utils/images/checked.svg'

interface Props {
  details: TOptionDetail[]
}

const OptionDetail: React.FC<Props> = ({ details }) => {
  const [selectedOption, setSelectedOption] = useState(details[0])
  const handleSeletedDetail = (option: TOptionDetail) => {
    setSelectedOption(option)
  }

  return (
    <>
      {details.map((option) => (
        <OptionWrapper onClick={() => handleSeletedDetail(option)}>
          <Div>
            {selectedOption.id === option.id ? (
              <img src={IconChecked} />
            ) : (
              <img src={IconUnchecked} />
            )}
          </Div>
          <Div>{option.name}</Div>
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
