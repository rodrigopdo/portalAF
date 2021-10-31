import React, { useState } from 'react'

import { PaginationItem, TableContainer, TablePagination } from './styles';

const Table = props => {

  const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if(props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currentPage, setCurrentPage] = useState(0);

  const selectPage = page => {
    const start = Number(props.limit) * page
    const end = start + Number(props.limit)

    setDataShow(props.bodyData.slice(start, end))

    setCurrentPage(page)
  }


  return (
    <div>
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
                  dataShow.map((item, index) => props.renderBody(item, index))
                }
              </tbody>
            ) : null
          }
        </table>
      </TableContainer>
      {
        pages > 1 ? (
          <TablePagination>
            {
              range.map((item, index) => (
                <PaginationItem key={index} className={currentPage === index ? 'active' : ''} onClick={() => selectPage(index)}>
                  {item + 1}
                </PaginationItem>
              ))
            }
          </TablePagination>
        ) : null
      }
    </div>
  )
}

export default Table;
