import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'

import routes from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeNameAction } from './store/modules/counter'
import Demo from './views/demo/demo'

function App() {
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.counter.name,
      direction: state.counter.direction,
      names: state.counter.names
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleChangeName() {
    dispatch(changeNameAction('hello, 11'))
  }
  return (
    <div className="App">
      {/* <Demo name="xulei" age={22} /> */}
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>
        当前计数: {count}-{name}
      </h2>
      <button onClick={handleChangeName}>change name</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
