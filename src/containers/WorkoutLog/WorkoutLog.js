import React from 'react'
import { connect } from 'react-redux'
import { Box } from '@rebass/grid'
import Container from '../../components/Container'
import Form from './components/Form'
import Exercises from './components/Exercises'
import * as actions from '../../modules/workout-log/action'

function WorkoutLogApp(props) {
  const {
    list
  } = props

  return (
    <Container>
      <Box>
        <h1>Workout Log</h1>
      </Box>
      <Box>
        <h5>Insert an item</h5>
      </Box>
      <Form { ...props } />
      <Exercises list={list} { ...props } />
    </Container>
  )
}

const mapStateToProps = state => state.workoutLog

export default connect(mapStateToProps, { ...actions })(WorkoutLogApp)
