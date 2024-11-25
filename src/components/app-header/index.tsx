import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from '../app-footer/style'
import headerTitles from '@/assets/data/header-title.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return <Link to={item.link}>{item.title}</Link>
    }
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    )
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
