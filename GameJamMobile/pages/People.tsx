import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

const PeopleView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

function PeopleScreen() {
  return (
    <PeopleView>
      <Text>Welcome to the People Screen</Text>
    </PeopleView>
  );
}

export default PeopleScreen;