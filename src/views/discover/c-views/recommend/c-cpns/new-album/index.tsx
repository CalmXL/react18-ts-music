import React, { useRef, memo } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'

import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 从 redux 中获取数据
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }))

  // 事件处理函数
  function handlePrevClick() {
    console.log('prev')
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    console.log('next')
    bannerRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel autoplay dots={false} speed={2000} ref={bannerRef}>
            {[0, 1].map((item, index) => (
              <div className="album-list" key={index}>
                {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => (
                  <NewAlbumItem key={iten.id} itemData={iten} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
