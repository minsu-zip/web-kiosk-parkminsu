import { TCategory } from '../../types'
import Tab from '../../atoms/Tab'
import styled from '@emotion/styled'
import Spinner from '../../atoms/Spinner'
import IconLogo from '../../images/logo.svg'

interface Props {
  categories?: TCategory[]
  selected: number
  onClickCategory(event: React.MouseEvent<HTMLButtonElement>): void
}

const Header: React.FC<Props> = ({ categories, onClickCategory, selected }) => {
  return (
    <>
      <HeaderWrapper>
        <h1>개발자 건강 지킴이</h1>
      </HeaderWrapper>
      <TabWrapper>
        {categories ? (
          categories.length ? (
            categories.map(({ id, name }) => (
              <Tab
                key={id}
                id={id}
                category={name}
                active={selected === id}
                onClickCategory={onClickCategory}
              />
            ))
          ) : (
            <div>데이터가 없습니다.</div>
          )
        ) : (
          <Spinner />
        )}
      </TabWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`
const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`
export default Header
