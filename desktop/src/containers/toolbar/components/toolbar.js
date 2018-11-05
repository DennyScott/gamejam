import React from 'react';
import styled from 'styled-components';

import Menu from './menu';

const ToolbarWrapper = styled.div`
  background-color: rgb(67, 67, 67);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;

  display: flex;
  cursor: default;
`;

function Toolbar(props) {
  return (
    <ToolbarWrapper>
      <Menu />
    </ToolbarWrapper>
  );
}

export default Toolbar;