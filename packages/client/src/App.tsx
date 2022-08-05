import { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'
import Tab from 'atoms/Tab'
import styled from '@emotion/styled'
import TabItem from 'atoms/Tab/TabItem'

const App = () => {
  // 데이터 필드 변경에 따른 ts타입 나중에 변경 예정
  const [kioskData, setKioskData] = useState<any>()
  const [selected, setSelected] = useState<number>()
  const [menuList, setMenuList] = useState<any>()

  const getData = useCallback(async () => {
    const { categories } = await getAllInfo()
    setKioskData(categories)
  }, [kioskData])

  const onClickCategory = (id: number) => {
    setSelected(id)
    setMenuList(kioskData[id - 1])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Wrapper>
          {kioskData ? (
            kioskData.map(({ id, name }: any) => (
              <Tab
                key={`${id}${name}`}
                id={id}
                category={name}
                active={selected === id}
                onClickCategory={onClickCategory}
              />
            ))
          ) : (
            <div>로딩중</div>
          )}
        </Wrapper>

        {menuList?.menus?.map(({ id, name }: any) => (
          <TabItem key={id} id={id} title={name}></TabItem>
        ))}
      </div>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`

export default App
