import { TMenu } from 'types'
import React from 'react'
import TabItem from '../../atoms/Tab/TabItem'
import styled from '@emotion/styled'
interface Props {
  menus?: TMenu[]
  onClickMenu(event: React.MouseEvent<HTMLDivElement>): void
}

const Page: React.FC<Props> = ({ menus, onClickMenu }) => {
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
    </>
  )
}

const TabItemWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
`

export default Page
