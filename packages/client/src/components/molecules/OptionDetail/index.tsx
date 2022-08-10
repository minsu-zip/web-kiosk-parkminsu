import styled from '@emotion/styled'
import React, { useState } from 'react'
import { TOptionDetail } from 'utils/types'
import IconUnchecked from '../../../utils/images/unchecked.svg'
import IconChecked from '../../../utils/images/checked.svg'

interface Props {
  detail: TOptionDetail[]
}

const OptionDetail: React.FC<Props> = ({ detail }) => {
  const [selectedOption, setSelectedOption] = useState(detail[0])
  const handleSeletedDetail = (option: TOptionDetail) => {
    setSelectedOption(option)
  }

  return (
    <>
      {detail.map((option) => (
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
