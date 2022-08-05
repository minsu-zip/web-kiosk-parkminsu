import styled from '@emotion/styled'
import { useMemo } from 'react'

const TabItem = ({ title, index, active, ...props }: any) => {
  const items = useMemo(() => title?.menus?.map((el: any) => el.name), [title])

  return (
    <TabItemWrapper active={active} {...props}>
      {items ? items.map((el: any) => el) : <h1>로딩중</h1>}
    </TabItemWrapper>
  )
}

const TabItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }: any) => (active ? '#ddf' : '#eee')};
  cursor: pointer;
`
export default TabItem
