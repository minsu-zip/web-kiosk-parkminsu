import { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'
import Tab from 'atoms/Tab'
import styled from '@emotion/styled'

const App = () => {
  const [kioskData, setKioskData] = useState<any>()

  const getData = useCallback(async () => {
    const { categories } = await getAllInfo()
    setKioskData(categories)
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {kioskData ? (
        <div className="App">
          <Tab kioskData={kioskData}></Tab>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </ThemeProvider>
  )
}

export default App
