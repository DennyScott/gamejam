import React from 'react';
import styled from 'styled-components';

import desktopBgImage from '../../../assets/cinn.png';
import Toolbar from '../../toolbar';
import ApplicationShell from '../../application-shell';

const DesktopBackground = styled.div`
  background-image: url(${desktopBgImage});
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden; 
`;

function Desktop(props) {
  return (<DesktopBackground>
    <ApplicationShell />
    <Toolbar />
  </DesktopBackground>);
}

export default Desktop;