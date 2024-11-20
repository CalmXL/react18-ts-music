import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'

import routes from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeNameAction } from './store/modules/counter'
import './service/modules/home'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>

// function App() {
//   const { count, name } = useSelector(
//     (state: IRootState) => ({
//       count: state.counter.count,
//       name: state.counter.name
//     }),
//     shallowEqual
//   )

//   return (
//     <div className="App">
//       <div className="nav">
//         <Link to="/discover">发现音乐</Link>
//         <Link to="/mine">我的音乐</Link>
//         <Link to="/focus">关注</Link>
//         <Link to="/download">下载客户端</Link>
//       </div>
//       <h2>
//         当前计数: {count}-{name}
//       </h2>
//       <Suspense fallback="">
//         <div className="main">{useRoutes(routes)}</div>
//       </Suspense>
//     </div>
//   )
// }

function App() {
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.counter.name
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleChangeName() {
    dispatch(changeNameAction('hello, 11'))
  }

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
      <button onClick={handleChangeName}>change name</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
