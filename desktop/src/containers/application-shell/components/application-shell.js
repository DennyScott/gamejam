import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faWindowMaximize, faTimes } from '@fortawesome/pro-solid-svg-icons';


function ApplicationShell(props) {
  return (
    <Wrapper>
      <TitleBar>
        <Title>Home</Title>
        <TitleItems>
          <Icon icon={faWindowMinimize} />
          <Icon icon={faWindowMaximize} />
          <Icon icon={faTimes} />
        </TitleItems>
      </TitleBar>
      <ApplicationContent>
        {props.children}
      </ApplicationContent>
    </Wrapper>
  );
}

ApplicationShell.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  transform: translate(50%, 50%);
  min-width: 600px;
  min-height: 600px;
  background-color: #fff;
  border: 1px solid rgb(118, 128, 131);
`;

const TitleBar = styled.div`
  background-color: rgb(237, 237, 237);
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  justify-self: center;
`;

const TitleItems = styled.div`
`;

const Icon = styled(FontAwesomeIcon)`
  color: rgb(87, 103, 108);
`;

const ApplicationContent = styled.div`
  flex-grow: 1; 
`;

export default ApplicationShell;
