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
        <h1>민수의 헬스 키오스크</h1>
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
