import styled from 'styled-components';

export const TableContainer = styled.div `
  overflow-y: auto;
  table {
    width: 100%;
    min-width: 400px;
    border-spacing: 0;
  }
  thead {
    background-color: fafafb;
  }
  tr {
    text-align: left;
  }
  th, td {
  text-transform: capitalize;
  padding: 15px 10px;
  }
  tbody > tr:hover {
    background-color: #3dd969;
    color: #ffffff;
  }
`;

export const TablePagination = styled.div `
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationItem = styled.div `
  margin-left: 10px;
  padding-top: 4px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    background-color: #3DD969;
    color: #ffffff;
    font-weight: 600;
  }
  &.active:hover {
    background-color: #3DD969;
    color: #ffffff;
    font-weight: 600;
  }
  &:hover {
    color: #000;
    background-color: #f4f4f4;
  }
`;

