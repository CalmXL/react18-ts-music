import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    border: solid 1px #d3d3d3;
    display: flex;
    background: url(${require('@/assets/img/wrap-bg.png')});
  }
`

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 720px;
`

export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;
`
