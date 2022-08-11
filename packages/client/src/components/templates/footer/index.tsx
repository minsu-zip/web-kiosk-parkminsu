import styled from '@emotion/styled'
import Button from 'components/atoms/Button'
import Card from 'components/organisms/Card'
import { useCarts } from 'contexts/CartProvider'
import { useMemo } from 'react'
import { theme } from 'utils/styles'
import Timer from './Timer'

const Footer = () => {
  const { carts, removeCart, initCart } = useCarts()

  const totalPrice = useMemo(() => {
    return carts.reduce((acc: any, cur: any) => acc + cur.totalPrice, 0)
  }, [carts])

  return (
    <>
      {carts.length !== 0 ? (
        <FooterContainer>
          {carts.map((cart: any, index: number) => (
            <Wrapper key={`footer${cart.id}${index}`}>
              <OptionWrapper>
                <div style={{ display: 'flex' }}>
                  <Span>{cart.count}개</Span>
                  <Button
                    style={{ width: '30px', height: '30px', fontSize: '18px' }}
                    onClick={() => removeCart(cart.id)}>
                    X
                  </Button>
                </div>
                <Span>
                  {cart.selectedOption.map(({ option }: any) => option.name)}
                </Span>
              </OptionWrapper>
              <Card
                menu={cart}
                hideLabel
                style={{
                  width: '120px',
                  margin: '0',
                  padding: '8px',
                }}></Card>
            </Wrapper>
          ))}

          <Span style={{ position: 'absolute', right: 200, top: 10 }}>
            상품 총합 : {totalPrice.toLocaleString()}원
          </Span>
          <Button
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '60px',
              width: '120px',
              fontSize: '18px',
              backgroundColor: `${theme.ERROR}`,
            }}>
            <Timer initCart={initCart}></Timer>
          </Button>
          <Button
            onClick={() => initCart()}
            style={{
              position: 'absolute',
              height: '100px',
              right: 0,
              bottom: 0,
            }}>
            전체삭제
          </Button>
        </FooterContainer>
      ) : null}
    </>
  )
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  background-color: ${theme.LINE};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Span = styled.span`
  font-size: 18px;
  padding: 4px;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Footer
