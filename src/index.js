import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import WorkoutLogContainer from './containers/WorkoutLog/WorkoutLog'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <WorkoutLogContainer />
    </Provider>
  )
}

render(<App />, document.getElementById('app'))
