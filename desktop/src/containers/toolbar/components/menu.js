import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const MenuWrapper = styled.div`
  color: rgb(226, 226, 226);
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(50, 50, 50);
  }
`;

const MenuLabel = styled.span`
  margin-right: 10px; 
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  margin-right: 5px;
`;

function Menu() {
  return (
    <MenuWrapper>
      <Icon icon={faCog} />
      <MenuLabel>Menu</MenuLabel>
    </MenuWrapper>
  );
}

export default Menu;