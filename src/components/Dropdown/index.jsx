import React, { useRef, useState } from 'react'

import { DropdownContainer, DropdownContent, DropdownToggle, Footer, ToggleBadge } from './styles';

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      if(content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active')
      }
    }
  });
}

const Dropdown = (props) => {

  const dropdown_content_el = useRef(null);
  const dropdown_toggle_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
  return (
    <DropdownContainer>
      <DropdownToggle ref={dropdown_toggle_el}>
        {
          props.icon ? <i className={props.icon}></i> : ''
        }
        {
          props.badge ? <ToggleBadge>{props.badge}</ToggleBadge> : ''
        }
        {
          props.customToggle ? props.customToggle() : ''
        }
      </DropdownToggle>
      <DropdownContent ref={dropdown_content_el}>
        {
          props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
        }
        {
          props.renderFooter ? (
            <Footer>
              {props.renderFooter()}
            </Footer>
          ) : ''
        }
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown;
