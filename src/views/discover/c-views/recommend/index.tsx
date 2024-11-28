import request from '@/service'
import { useAppDispatch } from '@/store'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendLeft, RecommendRight, RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 调用 dispatch 获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
      <RecommendWrapper>
        <div className="content wrap-v2">
          <RecommendLeft>
            <div className="left">left</div>
          </RecommendLeft>
          <RecommendRight>
            <div className="right">right</div>
          </RecommendRight>
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(Recommend)
