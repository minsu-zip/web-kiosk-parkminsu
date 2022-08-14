import { fireEvent, render, screen, waitFor } from './test-utils'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import categoriesData from '../../../common/categoriesData.json'
import menuData from '../../../common/menuData.json'
import Main from 'components/templates/main'
import App from 'App'

const API_END_POINT = process.env.REACT_APP_API_END_POINT

const server = setupServer(
  rest.get(`${API_END_POINT}categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoriesData))
  }),
  rest.get(`${API_END_POINT}menus/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(menuData[0]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('전체 테이터 패칭 테스트', async () => {
  render(<App></App>)
  await waitFor(() => {
    expect(screen.getByTestId('main-test')).toBeInTheDocument()
  })
})

test('메뉴 디테일 정보 패칭 테스트', async () => {
  render(<Main menus={categoriesData[0].menus} />)

  const selectedMenu = screen.getByTestId('1menuComponent')
  fireEvent.click(selectedMenu)

  await waitFor(() => {
    expect(screen.getByText('수량')).toBeInTheDocument()
  })
})
