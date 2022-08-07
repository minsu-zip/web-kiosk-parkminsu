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
      <ImgWrapper>
        <Img className={imgUrl2 ? 'first' : ''} src={imgUrl1} />
        <Img src={imgUrl2} />
      </ImgWrapper>
      <Span>{name}</Span>
      <Span>{price}</Span>
    </TabItemWrapper>
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

const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  &:hover {
    & .first {
      display: none;
    }
  }
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  &.first {
    z-index: 1;
  }
`

export default React.memo(TabItem)
