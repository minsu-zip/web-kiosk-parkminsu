import { TMenuOption } from 'types'
import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import OptionDetail from 'components/OptionDetail'

interface Props {
  options: TMenuOption[]
}

const MenuOption: React.FC<Props> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(
    options.map(({ id }) => ({ optionId: id, detailId: 0 })),
  )

  const onClickSelectedOption = useCallback(
    (optionIndex: number, detailId: number) => {
      const newSelectedOption = [...selectedOption]
      newSelectedOption[optionIndex].detailId = detailId
      setSelectedOption(newSelectedOption)
    },
    [selectedOption],
  )

  return (
    <>
      <OptionContainer>
        {options.map(({ detail, name, id }, idx) => (
          <>
            <Div>{name}</Div>
            {detail.map((option, index) => (
              <OptionDetail
                option={option}
                index={index}
                selectedOption={selectedOption[idx]}
                onClickSelectedOption={(id) => onClickSelectedOption(idx, id)}
              />
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
  justify-content: center;
`

const Div = styled.span`
  margin-left: 10px;
  font-size: 18px;
`

export default MenuOption
