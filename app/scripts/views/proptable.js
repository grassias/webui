import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/lib/Table'

export
default class PropTable extends Component {
  static propTypes = {
    table: PropTypes.array,
    children: PropTypes.array
  };

  render () {
    return (
      <Table responsive>
        <tbody>
          {
            this.props.table.map((val) => {
              return (
                <tr>
                  <td className='text-left'><strong>{val[0]}</strong></td>
                  <td className='text-right'>{val[1]}</td>
                </tr>
              )
            })
          }
          {this.props.children}
        </tbody>
      </Table>
    )
  }
}
