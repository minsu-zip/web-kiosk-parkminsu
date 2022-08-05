import styled from '@emotion/styled'
import React from 'react'

const TabItem = ({ title, ...props }: any) => {
  return <TabItemWrapper {...props}>{title}</TabItemWrapper>
}

const TabItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  cursor: pointer;
`
export default React.memo(TabItem)