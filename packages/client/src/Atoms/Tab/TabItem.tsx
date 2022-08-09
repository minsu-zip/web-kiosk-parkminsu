import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { TMenu } from 'types'

interface TProps {
  menu: TMenu
  onClickMenu(event: React.MouseEvent<HTMLDivElement>): void
  rank: number
}

const TabItem: React.FC<TProps> = ({ menu, onClickMenu, rank }) => {
  const [visible, setVisible] = useState(false)

  const { id, imgUrl1, imgUrl2, name, price } = menu

  return (
    <>
      <TabItemWrapper data-id={id} onClick={onClickMenu}>
        <RankSpan>{rank + 1}위</RankSpan>
        <Img src={imgUrl1} imgUrl2={imgUrl2}></Img>
        <Span>{name}</Span>
        <Span>{price.toLocaleString()}원</Span>
      </TabItemWrapper>
    </>
  )
}

const RankSpan = styled.span`
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 2;
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

const Img = styled.img<{ imgUrl2: string }>`
  width: 300px;
  height: 300px;
  &:hover {
    content: ${({ imgUrl2 }) => `url(${imgUrl2})`};
  }
`

export default React.memo(TabItem)
