import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeNameAction } from './store/modules/counter'
import Demo from './views/demo/demo'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

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
        <AppHeader />
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <h2>
        当前计数: {count}-{name}
      </h2>
      <button onClick={handleChangeName}>change name</button>
    </div>
  )
}

export default App
