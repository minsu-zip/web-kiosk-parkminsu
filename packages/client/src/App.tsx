import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'
import Tab from 'atoms/Tab'
import styled from '@emotion/styled'
import TabItem from 'atoms/Tab/TabItem'
import { TCategory } from 'types'

const App = () => {
  // 데이터 필드 변경에 따른 ts타입 나중에 변경 예정
  const [kioskData, setKioskData] = useState<TCategory[] | undefined>(undefined)
  const [selected, setSelected] = useState<number>(1)
  const [selectedMenuId, setSelectedMenuId] = useState<number | undefined>()

  const getData = async () => {
    const data = await getAllInfo()
    setKioskData(data)
  }

  const onClickCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = (e.target as HTMLElement).dataset
      setSelected(Number(id))
    },
    [],
  )

  const onClickMenu = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = (e.target as HTMLElement).dataset
    setSelectedMenuId(Number(id))
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <TabWrapper>
          {kioskData ? (
            kioskData.length ? (
              kioskData.map(({ id, name }) => (
                <Tab
                  key={id}
                  id={id}
                  category={name}
                  active={selected === id}
                  onClickCategory={onClickCategory}
                />
              ))
            ) : (
              <div>데이터가 없습니다.</div>
            )
          ) : (
            <div>로딩중</div>
          )}
        </TabWrapper>

        <TabItemWrapper>
          {kioskData?.[selected - 1]?.menus?.map((menu, index) => (
            <TabItem
              key={menu.id}
              menu={menu}
              onClickMenu={onClickMenu}
              rank={index}></TabItem>
          ))}
        </TabItemWrapper>
      </div>
    </ThemeProvider>
  )
}

const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`
const TabItemWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
`
export default App
