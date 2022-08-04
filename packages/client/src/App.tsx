import { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'

const App = () => {
  const [init, setInit] = useState<any>()

  const getData = async () => {
    const data = await getAllInfo()
    setInit(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {init ? (
        <div className="App">{init.categories[0].name}</div>
      ) : (
        <div>loading</div>
      )}
    </ThemeProvider>
  )
}

export default App
