import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './utils/styles'
import GlobalStyle from './utils/styles/GlobalStyles'
import { getAllInfoAPI } from './apis/kiosk'
import { TCategory } from 'utils/types'
import Header from './components/templates/Header'
import Main from 'components/templates/main'

const App = () => {
  // 데이터 필드 변경에 따른 ts타입 나중에 변경 예정
  const [kioskData, setKioskData] = useState<TCategory[]>()
  const [selected, setSelected] = useState<number>(1)

  const getData = async () => {
    const data = await getAllInfoAPI()
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
          <Main menus={kioskData?.[selected - 1].menus}></Main>
        ) : null}
      </div>
    </ThemeProvider>
  )
}

export default App
