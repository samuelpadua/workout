
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Table from '../index'

describe('Table', () => {
  it('should render Table', () => {
    const component = (
      <Table>
        <thead>
          <tr>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <th>Body</th>
          </td>
        </tbody>
        <tfoot>
          <td>
            <th>Footer</th>
          </td>
        </tfoot>
      </Table>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
