import Button from 'components/atoms/Button'
import { render, screen, fireEvent } from './test-utils'

describe('버튼 컴포넌트 테스트<Button />', () => {
  it('렌더링 테스트', () => {
    render(<Button>버튼</Button>)
    const button = screen.getByText('버튼')

    expect(button).toBeInTheDocument()
  })

  it('클릭 이벤트 테스트', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>버튼</Button>)
    const button = screen.getByText('버튼')

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
