import React, { useEffect } from "react";
import Messenger from "../containers/messenger";
import styled from "styled-components/native";

const HomeView = styled.View`
  flex: 1;
  background-color: #fff;
`;

interface HomeScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

function HomeScreen({ navigation }: HomeScreenProps) {
  
  useEffect(() => {
    const { navigate } = navigation;
    navigate("Register");
  }, []);
  
  return (
    <HomeView>
      <Messenger />
    </HomeView>
  );
}

export default HomeScreen;
