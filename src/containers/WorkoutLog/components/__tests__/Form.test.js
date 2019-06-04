import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Form from '../Form/Form'

describe('Form', () => {
  it('should render Form to add new workout log', () => {
    const tree = renderer
      .create(<Form add={() => console.log('dispatch action to add new workout')} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
