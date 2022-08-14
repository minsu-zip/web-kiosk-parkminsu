import { TMenuInfo, TMenuOption, TOptionDetail } from 'utils/types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import OptionDetail from 'components/molecules/OptionDetail'
import Button from 'components/atoms/Button'
import IconPlus from 'utils/images/plus.svg'
import IconMinus from 'utils/images/minus.svg'
import { theme } from 'utils/styles'
interface Props {
  options: TMenuOption[]
  menuPrice: number
  onClose: (data?: TMenuInfo) => void
}

interface SelectedProps {
  optionId: number
  option: TOptionDetail
}

const MenuOption: React.FC<Props> = ({ options, menuPrice, onClose }) => {
  const [count, setCount] = useState(1)
  const [selectedOption, setSelectedOption] = useState<SelectedProps[]>()

  useEffect(() => {
    const data = options.map(({ id }, index) => {
      return {
        optionId: id,
        option: options[index].details[0],
      }
    })

    setSelectedOption(data)
  }, [options])

  const onIncreaseCount = useCallback(() => {
    if (count >= 10) return

    setCount((count) => count + 1)
  }, [count])

  const onDecreaseCount = useCallback(() => {
    if (count <= 1) return

    setCount((count) => count - 1)
  }, [count])

  const addCart = () => {
    const data = { count, totalPrice, selectedOption }
    onClose(data)
  }

  const handleSelectedOption = (data: SelectedProps) => {
    const result = selectedOption?.every(
      ({ option }) => option.id !== data.option.id,
    )
    if (!result) return

    const newSelectedOption = selectedOption?.filter(
      ({ optionId }) => optionId !== data.optionId,
    )
    newSelectedOption?.push({ optionId: data.optionId, option: data.option })
    setSelectedOption(newSelectedOption)
  }
  const totalPrice = useMemo(() => {
    const optionPrice = selectedOption?.reduce(
      (acc, cur) => acc + cur.option.price,
      0,
    )

    return (menuPrice + Number(optionPrice)) * count
  }, [count, menuPrice, selectedOption])

  return (
    <OptionContainer>
      {options.map(({ name, details, id }, index) => (
        <div key={`${index}${id}`}>
          <Title>{name}</Title>
          <OptionDetail
            optionId={id}
            details={details}
            handleSelectedOption={handleSelectedOption}></OptionDetail>
        </div>
      ))}

      <CheckBox>
        <Span>수량</Span>
        <Button
          onClick={onIncreaseCount}
          style={{
            width: '80px',
            height: '50px',
          }}
          data-testid={`plusButton`}>
          <img src={IconPlus} alt="IconPlus" />
        </Button>
        <Span data-testid={`$count`}>{count < 10 ? count : '최대 10'} 개</Span>
        <Button
          onClick={onDecreaseCount}
          style={{
            width: '80px',
            height: '50px',
            backgroundColor: `${theme.ERROR}`,
          }}
          data-testid={`minusButton`}>
          <img src={IconMinus} alt="IconMinus" />
        </Button>
      </CheckBox>

      <ButtonWrapper>
        <Button onClick={addCart} style={{ width: '300px' }}>
          {totalPrice.toLocaleString()}원 담기
        </Button>
      </ButtonWrapper>
    </OptionContainer>
  )
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px;
`

const Title = styled.span`
  margin-left: 10px;
  font-size: 18px;
`
const Span = styled.span`
  font-size: 30px;
  width: 150px;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const CheckBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  margin: 20px;
  align-items: center;
`

export default MenuOption
