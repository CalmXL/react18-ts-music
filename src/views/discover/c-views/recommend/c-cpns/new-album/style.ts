import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  width: 689px;
  margin-top: 50px;

  > .content {
    box-sizing: border-box;
    height: 186px;
    background-color: #f5f5f5;
    border: solid 1px #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      position: relative;
      top: -15px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slider {
        height: 150px;
        overflow: hidden;

        .album-list {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`
