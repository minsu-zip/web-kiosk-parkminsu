import { TMenu } from 'types'
import React, { useCallback, useState } from 'react'
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
  const [selectedMenuId, setSelectedMenuId] = useState<number>()
  const [selectedMenu, setSelectedMenu] = useState<TMenu>()
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)

  const onClickMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = (e.currentTarget as HTMLElement).dataset
    setSelectedMenuId(Number(id))
    const menu = menus.find((item) => item.id === Number(id))
    setSelectedMenu(menu)
    setVisible(true)
  }, [])

  const onIncreaseCount = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const onDecreaseCount = useCallback(() => {
    setCount((count) => count - 1)
  }, [])

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

      <Modal visible={visible} onClose={() => setVisible(false)}>
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
            <Span>{count} 개</Span>
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
          }}>
          <Button style={{ width: '300px' }}>400원 담기</Button>
        </div>
        {/* <button onClick={() => setVisible(false)}>Close</button> */}
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
  width: 120px;
  text-align: center;
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
