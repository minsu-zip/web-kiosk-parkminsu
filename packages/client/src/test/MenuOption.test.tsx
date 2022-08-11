import MenuOption from 'components/molecules/MenuOption'
import { render, screen, fireEvent } from './test-utils'
import optionData from '../../../common/optionData.json'

const menuPrice = 10000

const component = (
  <MenuOption
    options={optionData}
    menuPrice={menuPrice}
    onClose={() => null}></MenuOption>
)

describe('메뉴 옵션 컴포넌트<MenuOption />', () => {
  it('렌더링 테스트', () => {
    render(component)
    const menuOption = screen.getByText('수량')
    expect(menuOption).toBeInTheDocument()
  })

  it('수량 카운트 MAX 테스트', () => {
    render(component)
    const plusButton = screen.getByTestId('plusButton')

    for (let i = 0; i < 15; i++) {
      fireEvent.click(plusButton)
    }
    expect(screen.getByText('최대 10 개')).toBeInTheDocument()
  })

  it('수량 카운트 MIN 테스트', () => {
    render(component)
    const minusButton = screen.getByTestId('minusButton')

    for (let i = 0; i < 20; i++) {
      fireEvent.click(minusButton)
    }
    expect(screen.getByText('1 개')).toBeInTheDocument()
  })
})
