import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from '@rebass/grid'
import Container from '../../components/Container'
import Form from './components/Form/Form'
import Exercises from './components/Exercises'
import * as actions from '../../modules/workout-log/action'
import * as selectors from '../../modules/workout-log/selector'

function WorkoutLogApp(props) {
  const {
    list,
  } = props

  return (
    <Container>
      <Box px={2}>
        <h1>Exercícios</h1>
      </Box>
      <Form {...props} />
      <Exercises list={list} {...props} />
    </Container>
  )
}

WorkoutLogApp.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = state => ({
  ...state.workoutLog,
  list: selectors.getList(state.workoutLog),
})

export default connect(mapStateToProps, { ...actions })(WorkoutLogApp)
