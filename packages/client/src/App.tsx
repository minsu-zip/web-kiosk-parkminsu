import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">asd</div>
    </ThemeProvider>
  )
}

export default App
