import React from 'react';
import MessagesContainer from '../containers/messages-container';
import styled from 'styled-components/native'

const HomeView = styled.View`
  flex: 1;
  background-color: #fff;
`

export default class HomeScreen extends React.Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    navigate('Register');
  }

  render() {
    return (
      <HomeView>
        < MessagesContainer />
      </HomeView>
    );
  }
}