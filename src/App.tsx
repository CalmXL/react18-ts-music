import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import routes from './router'
import store from './store'

// type IRootState =
type GetStateFnType = typeof store.getState
type FnReturnType = ReturnType<GetStateFnType>

function App() {
  const { count, name } = useSelector(
    (state: any) => ({
      count: state.counter.count,
      name: state.counter.name
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>
        当前计数: {count}-{name}
      </h2>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
