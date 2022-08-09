import { TCategory } from '../../types'
import Tab from '../../atoms/Tab'
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

const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`
export default Header
