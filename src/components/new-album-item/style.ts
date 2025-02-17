import styled from 'styled-components'

export const NewAlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
