import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))

  return (
    <HotWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((recommend) => (
          <SongMenuItem key={recommend.id} info={recommend} />
        ))}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
