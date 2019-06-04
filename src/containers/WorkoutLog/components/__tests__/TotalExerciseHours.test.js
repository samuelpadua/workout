import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import TotalExerciseHours from '../TotalExerciseHours'

describe('TotalExerciseHours', () => {
  it('should render message with total of hours', () => {
    const tree = renderer
      .create(<TotalExerciseHours hours={8.5} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
