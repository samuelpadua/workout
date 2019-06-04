import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Button from '../index'
import { colors } from '../../../constants'
import { darken } from '../../../utils/LightenDarkenColor'

describe('Button', () => {
  describe('default', () => {
    const tree = renderer
      .create(<Button full>Default</Button>)
      .toJSON()

    it('should render Button', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should change apply dark color when :hover', () => {
      expect(tree).toHaveStyleRule('background', darken(colors.default, 10), {
        modifier: ':hover',
      })
    })

    it('should change apply dark color when :active', () => {
      expect(tree).toHaveStyleRule('background', darken(colors.default, 20), {
        modifier: ':active',
      })
    })
  })

  describe('error', () => {
    const tree = renderer
      .create(<Button color="error" full>Default</Button>)
      .toJSON()

    it('should render Button with color error', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should change apply dark 10% color when :hover', () => {
      expect(tree).toHaveStyleRule('background', darken(colors.error, 10), {
        modifier: ':hover',
      })
    })

    it('should change apply dark 20% color when :active', () => {
      expect(tree).toHaveStyleRule('background', darken(colors.error, 20), {
        modifier: ':active',
      })
    })
  })
})
