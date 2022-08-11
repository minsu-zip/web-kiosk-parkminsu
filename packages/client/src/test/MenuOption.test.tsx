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

  it('초기 상품 가격 테스트', () => {
    render(component)

    const optionPrice = optionData.reduce(
      (acc, cur) => acc + cur.details[0].price,
      0,
    )

    expect(
      screen.getByText(`${(optionPrice + menuPrice).toLocaleString()}원 담기`),
    ).toBeInTheDocument()
  })

  it('옵션 및 수량 선택에 따른 가격 테스트', () => {
    render(component)

    optionData.forEach(({ details }) => {
      const selectedOption = screen.getByTestId(
        `option-detail-${details[details.length - 1].id}`,
      )
      fireEvent.click(selectedOption)
    })

    const optionPrice = optionData.reduce(
      (acc, cur) => acc + cur.details[cur.details.length - 1].price,
      0,
    )

    const plusButton = screen.getByTestId('plusButton')
    const count = 4
    for (let i = 0; i < count - 1; i++) {
      fireEvent.click(plusButton)
    }

    expect(
      screen.getByText(
        `${((optionPrice + menuPrice) * count).toLocaleString()}원 담기`,
      ),
    ).toBeInTheDocument()
  })
})
