import React from 'react'
import { PersonalizedWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

export default function NewAlbum() {
  return (
    <PersonalizedWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button className="sprite_02 arrow arrow-left"></button>
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </PersonalizedWrapper>
  )
}
