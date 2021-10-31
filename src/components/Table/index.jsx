import React from 'react'

import { TableContainer } from './styles';

const Table = props => {
  return (
    <TableContainer>
      <table>
        {
          props.headData && props.renderHead ? (
            <thead>
              <tr>
                {
                  props.headData.map((item, index) => props.renderHead(item, index))
                }
              </tr>
            </thead>
          ) : null
        }
        {
          props.bodyData && props.renderBody ? (
            <tbody>
              {
                props.bodyData.map((item, index) => props.renderBody(item, index))
              }
            </tbody>
          ) : null
        }
      </table>
    </TableContainer>
  )
}

export default Table;
