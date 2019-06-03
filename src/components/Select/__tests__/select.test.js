
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Select from '../index'
import { colors } from '../../../constants'

const selectOptions = [
  {
    value: 'run',
    text: 'Run'
  },
  {
    value: 'swimming',
    text: 'Swimming'
  },
  {
    value: 'bike',
    text: 'Bike'
  }
]

describe('Select', () => {
  describe('default', () => {
    it('should render Select', () => {
      const tree = renderer
        .create(<Select options={selectOptions} />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  
    it('should change color border on focus or active', () => {
      const tree = renderer.create(<Select options={selectOptions} />).toJSON()
      expect(tree).toHaveStyleRule('border', `2px solid ${colors.default}`, {
        modifier: ':focus',
      })

      expect(tree).toHaveStyleRule('border', `2px solid ${colors.default}`, {
        modifier: ':active',
      })
    })
  })

  describe('error', () => {
    it('should render Select with error state', () => {
      const tree = renderer
        .create(<Select options={selectOptions} error />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })

    it('should change color border on focus or active error state', () => {
      const tree = renderer.create(<Select options={selectOptions} error />).toJSON()
      expect(tree).toHaveStyleRule('border', `2px solid ${colors.error}`, {
        modifier: ':focus',
      })

      expect(tree).toHaveStyleRule('border', `2px solid ${colors.error}`, {
        modifier: ':active',
      })
    })
  })
})
