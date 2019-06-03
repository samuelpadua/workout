
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Input from '../index'
import { colors } from '../../../constants'

describe('Input', () => {
  describe('default', () => {
    it('should render Input', () => {
      const tree = renderer
        .create(<Input />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })
  
    it('should change color border on focus', () => {
      const tree = renderer.create(<Input />).toJSON()
      expect(tree).toHaveStyleRule('border', `2px solid ${colors.default}`, {
        modifier: ':focus',
      })
    })
  })

  describe('error', () => {
    it('should render Input with error state', () => {
      const tree = renderer
        .create(<Input error />)
        .toJSON()
  
      expect(tree).toMatchSnapshot()
    })

    it('should change color border on focus error state', () => {
      const tree = renderer.create(<Input error />).toJSON()
      expect(tree).toHaveStyleRule('border', `2px solid ${colors.error}`, {
        modifier: ':focus',
      })
    })
  })
})
