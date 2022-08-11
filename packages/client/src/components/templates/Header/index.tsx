import { TCategory } from 'utils/types'
import Tab from '../../molecules/Tab'
import styled from '@emotion/styled'
import Spinner from '../../atoms/Spinner'

interface Props {
  categories?: TCategory[]
  selected: number
  onClickCategory(event: React.MouseEvent<HTMLButtonElement>): void
}

const Header: React.FC<Props> = ({ categories, onClickCategory, selected }) => {
  if (!categories) {
    return (
      <TabWrapper>
        <Spinner />
      </TabWrapper>
    )
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>운동하는 개발자's Kiosk</HeaderTitle>
      </HeaderWrapper>
      <TabWrapper>
        {categories.length ? (
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
          <h1>데이터가 없습니다.</h1>
        )}
      </TabWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
`
const HeaderTitle = styled.div`
  font-size: 50px;
  font-weight: 800;
`
const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`
export default Header
