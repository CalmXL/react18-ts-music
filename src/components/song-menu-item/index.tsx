import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SoneMenuItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  info: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { info } = props

  return (
    <SoneMenuItemWrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {info.playCount}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </SoneMenuItemWrapper>
  )
}

export default memo(SongMenuItem)
