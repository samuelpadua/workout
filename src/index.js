import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import WorkoutLogContainer from './containers/WorkoutLog/WorkoutLog'
import BaseCSS from './components/BaseCSS'
import store from './store'

function App() {
  return (
    <BaseCSS>
      <Provider store={store}>
        <WorkoutLogContainer />
      </Provider>
    </BaseCSS>
  )
}

render(<App />, document.getElementById('app'))
