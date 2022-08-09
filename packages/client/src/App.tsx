import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'
import { TCategory } from 'types'
import Header from './components/Header'
import Page from 'components/Page'
import styled from '@emotion/styled'

const App = () => {
  // 데이터 필드 변경에 따른 ts타입 나중에 변경 예정
  const [kioskData, setKioskData] = useState<TCategory[]>()
  const [selected, setSelected] = useState<number>(1)

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

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header
          categories={kioskData}
          selected={selected}
          onClickCategory={onClickCategory}></Header>

        {kioskData ? (
          <Page menus={kioskData?.[selected - 1].menus}></Page>
        ) : null}
      </div>
    </ThemeProvider>
  )
}

const MenuModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
`

export default App
