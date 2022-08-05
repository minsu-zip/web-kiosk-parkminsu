import { useState } from 'react'
import styled from '@emotion/styled'
import Button from 'atoms/Button'
import TabItem from './TabItem'

const Tab = ({ kioskData }: any) => {
  const [category, setCategory] = useState(kioskData)
  const [selected, setSelected] = useState(1)
  const [test, setTest] = useState()

  const onClickCategory = (id: number) => {
    setSelected(id)
    setTest(category[id - 1])
  }

  return (
    <>
      <Wrapper>
        {category?.map((category: any) => (
          <Button
            key={category.id}
            onClick={() => onClickCategory(category.id)}
            style={{ backgroundColor: 'white', height: '5rem' }}>
            {category.name}
          </Button>
        ))}
      </Wrapper>

      <TabItem title={test}></TabItem>
    </>
  )
}

const Wrapper = styled.div`
  /* margin-top: 30px;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  border: 1px solid black; */
`

export default Tab
