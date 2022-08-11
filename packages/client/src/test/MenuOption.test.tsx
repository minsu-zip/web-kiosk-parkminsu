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
})
