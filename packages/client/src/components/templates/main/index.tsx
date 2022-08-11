import { TMenu, TOptionDetail } from 'utils/types'
import React, { useCallback, useMemo, useState } from 'react'
import Card from '../../organisms/Card'
import styled from '@emotion/styled'
import Modal from 'components/atoms/Modal'
import MenuOption from 'components/molecules/MenuOption'
import { getMenuAPI } from '../../../apis/kiosk'
import Spinner from 'components/atoms/Spinner'
import { useCarts } from 'contexts/CartProvider'

// interface Cart {
//   count: number
//   selectedOption: TOptionDetail
// }

interface Props {
  menus: TMenu[]
}

const Page: React.FC<Props> = ({ menus }) => {
  const [selectedMenu, setSelectedMenu] = useState<TMenu | undefined>()
  const [visible, setVisible] = useState(false)
  const { addCart } = useCarts()

  const getMenu = async (id: number) => {
    const data = await getMenuAPI(id)
    setSelectedMenu(data)
    setVisible(true)
  }

  const onClickMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = (e.currentTarget as HTMLElement).dataset
    getMenu(Number(id))
  }, [])

  const handleInit = (data?: any) => {
    if (data) {
      const { count, selectedOption, totalPrice } = data
      addCart({ count, selectedOption, totalPrice, ...selectedMenu })
    }
    setSelectedMenu(undefined)
    setVisible(false)
  }

  return (
    <>
      <CardWrapper>
        {menus?.map((menu, index) => (
          <Card
            key={menu.id}
            menu={menu}
            onClickMenu={onClickMenu}
            rank={index}></Card>
        ))}
      </CardWrapper>

      <Modal visible={visible} onClose={handleInit}>
        <MenuInfoWrapper>
          {selectedMenu ? (
            <>
              <Card
                key={selectedMenu.id}
                menu={selectedMenu}
                onClickMenu={onClickMenu}
              />
              <MenuOption
                options={selectedMenu.options}
                menuPrice={selectedMenu.price}
                onClose={handleInit}
              />
            </>
          ) : (
            <Spinner></Spinner>
          )}
        </MenuInfoWrapper>
      </Modal>
    </>
  )
}

const MenuInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    justify-content: flex-start;
    align-self: flex-start;
  }
  margin-top: 100px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
`

export default Page
