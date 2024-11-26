import request from '@/service'
import { useAppDispatch } from '@/store'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 调用 dispatch 获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return <div>Banners</div>
}

export default memo(Recommend)
