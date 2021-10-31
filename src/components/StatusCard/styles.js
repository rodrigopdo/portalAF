import styled from 'styled-components';

export const CardContainer = styled.div `
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 30px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  z-index: 1;
  transition: color .5s ease 0s;
  margin-bottom: 30px;
  &::before {
    content: '';
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-image: linear-gradient(
      to top right,
      #3dd969,
      #087A43
    );
    position: absolute;
    left: -50%;
    top: 0;
    transform: scale(0);
    transition: transform .8s ease 0s;
  }
  &:hover::before {
      transform: scale(3);
    }
  &:hover {
    color: #ffffff;
  }
`;

export const CardIcon = styled.div `
  width: 30%;
  height: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CardInfo = styled.div `
  flex-grow: 1;
  text-align: center;
  z-index: 1;
  text-transform: capitalize;
  h4 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;