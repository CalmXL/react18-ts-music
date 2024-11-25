import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from '../app-footer/style'
import headerTitles from '@/assets/data/header-title.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 定义组件内部的状态
  // const [curIdx, setCurIdx] = useState(0)

  /**组件的展示逻辑 */
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
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
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
