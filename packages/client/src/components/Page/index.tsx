import { TMenu } from 'types'
import React, { useCallback, useState } from 'react'
import TabItem from '../../atoms/Tab/TabItem'
import styled from '@emotion/styled'
import Modal from 'atoms/Modal'
import MenuOption from 'components/MenuOption'
interface Props {
  menus: TMenu[]
}

const Page: React.FC<Props> = ({ menus }) => {
  const [selectedMenuId, setSelectedMenuId] = useState<number>()
  const [selectedMenu, setSelectedMenu] = useState<TMenu>()
  const [visible, setVisible] = useState(false)

  const onClickMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = (e.currentTarget as HTMLElement).dataset
    setSelectedMenuId(Number(id))
    const menu = menus.find((item) => item.id === Number(id))
    setSelectedMenu(menu)
    setVisible(true)
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
        </MenuModalWrapper>
        {/* <button onClick={() => setVisible(false)}>Close</button> */}
      </Modal>
    </>
  )
}

const MenuModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TabItemWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
`

export default Page
