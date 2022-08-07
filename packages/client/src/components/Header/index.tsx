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
  return (
    <>
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

const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
`
export default Header
