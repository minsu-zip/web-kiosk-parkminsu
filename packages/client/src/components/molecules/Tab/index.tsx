import React from 'react'
import styled from '@emotion/styled'
import Button from 'components/atoms/Button'
import { theme } from '../../../utils/styles/index'

interface ActiveProps {
  active: boolean
}
interface TabWrapperProps extends ActiveProps {
  id: number
  category: string
  onClickCategory(event: React.MouseEvent<HTMLButtonElement>): void
}

const Tab: React.FC<TabWrapperProps> = ({
  id,
  category,
  onClickCategory,
  active,
  ...props
}) => {
  return (
    <>
      <TabWrapper active={active}>
        <Button
          data-id={id}
          style={{
            backgroundColor: 'white',
            height: '80px',
            minWidth: '240px',
          }}
          onClick={onClickCategory}
          {...props}>
          {category}
        </Button>
      </TabWrapper>
    </>
  )
}

const TabWrapper = styled.div`
  border-bottom: solid 3px
    ${({ active }: ActiveProps) =>
      active ? `${theme.TITLE_ACTIVE}` : `${theme.LINE}`};
`

export default React.memo(Tab)
