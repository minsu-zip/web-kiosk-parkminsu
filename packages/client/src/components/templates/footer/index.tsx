import styled from '@emotion/styled'
import { useCarts } from 'contexts/CartProvider'
import { theme } from '../../../utils/styles'

const Footer = () => {
  const { carts } = useCarts()

  return (
    <>
      {carts.length !== 0 ? (
        <FooterWrapper>
          {carts.map((cart: any) => (
            <div key={`cart${cart.count}`}>{cart.name}</div>
          ))}
        </FooterWrapper>
      ) : null}
    </>
  )
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 100px;
  width: 1080px;
  /* background-color: ${theme.LINE}; */
`

export default Footer
