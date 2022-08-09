import styled from '@emotion/styled'
import { TOptionDetail } from 'types'
import Iconchecked from '../../images/checked.svg'
import Iconunchecked from '../../images/unchecked.svg'

interface Props {
  optionDetail: TOptionDetail
  index: number
}

const Detail: React.FC<Props> = ({ optionDetail, index }) => {
  const { id, name, price } = optionDetail
  console.log(id, index)

  return (
    <>
      <OptionWrapper>
        <Div>
          {index + id === id ? (
            <img src={Iconchecked} />
          ) : (
            <img src={Iconunchecked} />
          )}

          {/* <img src={checked} /> */}
        </Div>
        <Div>{name}</Div>
        <Div>: {price.toLocaleString()}원</Div>
      </OptionWrapper>
    </>
  )
}

// const OptionWrapper = styled.div`
//   display: flex;
//   height: 40px;
//   align-items: center;
// `
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin: 10px;
`

const Div = styled.span`
  margin-left: 10px;
  font-size: 18px;
`

export default Detail
