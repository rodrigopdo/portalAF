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