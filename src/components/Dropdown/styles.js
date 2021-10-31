import styled from "styled-components";

export const DropdownContainer = styled.div `
  position: relative;
  z-index: 99;
`;

export const DropdownToggle = styled.button `
  border: 0;
  outline: 0;
  background-color: transparent;
  position: relative;
  i {
    font-size: 1.5rem;
    color: #333333;
  }
`;

export const ToggleBadge = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -12px;
  right: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #FF5967;
  color: #ffffff;
  font-size: 0.6rem;
`;

export const DropdownContent = styled.div `
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: max-content;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  overflow: hidden;
  transform-origin: top right;
  transform: scale(0);
  transition: transform .3s ease 0s;
  &.active {
    transform: scale(1);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);;
  }
`;

export const Footer = styled.div `
  padding: 20px;
  text-align: center;

`;