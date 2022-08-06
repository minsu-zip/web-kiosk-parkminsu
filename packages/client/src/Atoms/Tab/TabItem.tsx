import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { TMenu } from 'types'

interface TProps {
  menu: TMenu
  onClickMenu(event: React.MouseEvent<HTMLDivElement>): void
  rank: number
}

const TabItem: React.FC<TProps> = ({ menu, onClickMenu, rank }) => {
  const { id, imgUrl1, imgUrl2, name, price } = menu

  return (
    <TabItemWrapper data-id={id} onClick={onClickMenu}>
      <RankSpan>{rank + 1}위</RankSpan>
      <Img
        src={imgUrl1}
        onMouseOver={(e) => (e.currentTarget.src = imgUrl2)}
        onMouseOut={(e) => (e.currentTarget.src = imgUrl1)}
      />
      <Span>{name}</Span>
      <Span>{price}</Span>
    </TabItemWrapper>
  )
}

const RankSpan = styled.span`
  position: absolute;
  right: 0;
  top: 0px;
  font-size: x-large;
  padding: 4px 8px;
  background-color: rgba(255, 0, 0, 50%);
`

const Span = styled.span`
  margin-top: 10px;
  font-size: larger;
`

const TabItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 28px;
  cursor: pointer;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

export default React.memo(TabItem)
