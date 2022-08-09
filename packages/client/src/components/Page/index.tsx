import { TMenu } from 'types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import TabItem from '../../atoms/Tab/TabItem'
import styled from '@emotion/styled'
import Modal from 'atoms/Modal'
import MenuOption from 'components/MenuOption'
import Button from 'atoms/Button'
import IconPlus from '../../images/plus.svg'
import IconMinus from '../../images/minus.svg'
import { theme } from '../../styles'

interface Props {
  menus: TMenu[]
}

const Page: React.FC<Props> = ({ menus }) => {
  const [selectedMenu, setSelectedMenu] = useState<TMenu | undefined>()
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(1)

  // 옵션 클릭 시 해당 정보 객체로 받아오는 로직
  // 나중에 구현 예정
  //   const [selectedOption, setSelectedOption] = useState<any>()
  //   const handleSelectedOption = (option: TOptionDetail) => {
  // const selectedOptionFilter = selectedOption?.filter(
  //   ({ id }: { id: number }) => option.id !== id,
  // )
  // const newSelectedOption = [...selectedOptionFilter, option]
  // setSelectedOption(option)
  //   }

  const onClickMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { id } = (e.currentTarget as HTMLElement).dataset
      const menu = menus.find((item) => item.id === Number(id))
      setSelectedMenu(menu)
      setVisible(true)
    },
    [menus],
  )

  const onIncreaseCount = useCallback(() => {
    if (count >= 10) return

    setCount((count) => count + 1)
  }, [count])

  const onDecreaseCount = useCallback(() => {
    if (count <= 1) return

    setCount((count) => count - 1)
  }, [count])

  const totalPrice = useMemo(() => {
    return selectedMenu?.price ? selectedMenu.price * count : 0
  }, [selectedMenu, count])

  const handleInit = () => {
    setVisible(false)
    setCount(1)
    setSelectedMenu(undefined)
  }

  return (
    <>
      <TabItemWrapper>
        {menus?.map((menu, index) => (
          <TabItem
            key={menu.id}
            menu={menu}
            onClickMenu={onClickMenu}
            rank={index}></TabItem>
        ))}
      </TabItemWrapper>

      <Modal visible={visible} onClose={handleInit}>
        <MenuModalWrapper>
          <MenuInfoWrapper>
            {selectedMenu ? (
              <>
                <TabItem
                  key={selectedMenu.id}
                  menu={selectedMenu}
                  onClickMenu={onClickMenu}
                />
                <MenuOption options={selectedMenu.options} />
              </>
            ) : null}
          </MenuInfoWrapper>

          <CheckBox>
            <Span>수량</Span>

            <Button
              onClick={onIncreaseCount}
              style={{
                width: '80px',
                height: '50px',
              }}>
              <img src={IconPlus} />
            </Button>
            <Span>{count < 10 ? count : '최대 10'} 개</Span>
            <Button
              onClick={onDecreaseCount}
              style={{
                width: '80px',
                height: '50px',
                backgroundColor: `${theme.ERROR}`,
              }}>
              <img src={IconMinus} />
            </Button>
          </CheckBox>
        </MenuModalWrapper>

        <ButtonWrapper>
          <Button onClick={handleInit} style={{ width: '300px' }}>
            {totalPrice.toLocaleString()}원 담기
          </Button>
        </ButtonWrapper>
      </Modal>
    </>
  )
}

const MenuModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuInfoWrapper = styled.div`
  display: flex;
`

const TabItemWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
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
  justify-content: flex-end;
  margin: 20px;

  align-items: center;
`

export default Page
