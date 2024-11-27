import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  console.log(banners)

  return <div>TopBanner</div>
}

export default memo(TopBanner)
