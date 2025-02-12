import { useAppDispatch } from '@/store'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 调用 dispatch 获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <RecommendLeft>
          <div className="left">
            <HotRecommend />
            <NewAlbum />
          </div>
        </RecommendLeft>
        <RecommendRight>
          <div className="right">right</div>
        </RecommendRight>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
