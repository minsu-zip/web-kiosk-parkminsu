import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import GlobalStyle from './styles/GlobalStyles'
import { getAllInfo } from './apis/kiosk'
import { TCategory, TMenu } from 'types'
import Modal from 'atoms/Modal'
import Header from './components/Header'
import Page from 'components/Page'

const App = () => {
  // 데이터 필드 변경에 따른 ts타입 나중에 변경 예정
  const [kioskData, setKioskData] = useState<TCategory[]>()
  const [selected, setSelected] = useState<number>(1)
  const [selectedMenuId, setSelectedMenuId] = useState<number | undefined>()
  const [selectedMenu, setSelectedMenu] = useState<TMenu>()
  const [visible, setVisible] = useState(false)

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

  const onClickMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { id } = (e.currentTarget as HTMLElement).dataset
      setSelectedMenuId(Number(id))
      const menu = kioskData?.[selected - 1]?.menus.find(
        (item) => item.id === Number(id),
      )
      setSelectedMenu(menu)
      setVisible(true)
    },
    [kioskData, selected],
  )

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
  //   return
  //   /setSelectedMenu
  // }, [selectedMenuId])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header
          categories={kioskData}
          selected={selected}
          onClickCategory={onClickCategory}></Header>

        <Page
          menus={kioskData?.[selected - 1].menus}
          onClickMenu={onClickMenu}></Page>
      </div>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div></div>
        {/* <button onClick={() => setVisible(false)}>Close</button> */}
      </Modal>
    </ThemeProvider>
  )
}

export default App
