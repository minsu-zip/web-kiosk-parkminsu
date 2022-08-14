import { fireEvent, render, screen, waitFor } from './test-utils'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import categoriesData from '../../../common/categoriesData.json'
import menuData from '../../../common/menuData.json'
import Main from 'components/templates/main'
import App from 'App'

const API_END_POINT = process.env.REACT_APP_API_END_POINT

// msw 전체 데이터 요청
const main = setupServer(
  rest.get(`${API_END_POINT}categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoriesData))
  }),
)

beforeAll(() => main.listen())
afterEach(() => main.resetHandlers())
afterAll(() => main.close())

test('전체 테이터 패칭 테스트', async () => {
  render(<App></App>)
  await waitFor(() => {
    expect(screen.getByTestId('main-test')).toBeInTheDocument()
  })
})
