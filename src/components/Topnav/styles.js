import styled from 'styled-components';

export const TopnavContainer = styled.div `
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  height: 110px;
`;

export const TopnavSearch = styled.div `
  position: relative;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  overflow: hidden;
  input {
    height: 100%;
    width: 100%;
    padding: 10px 60px 10px 20px;
    font-size: 1rem;
    border-radius: 15px;
    color: #333333; 
    background-color: #ffffff;
  }
  i {
    font-size: 1.5rem;
    position: absolute;
    right: 20px;
    color: #333333;
  }
`;

export const TopnavRight = styled.div `
  display: flex;
  align-items: center;
`;

export const TopnavRightItem = styled.div `
  margin-left: 30px;
`;