import React from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { Message } from "./Message";
import styled from "styled-components/native";
import { IMessage } from "../../types/message";

export const MessagesView = styled.View`
  flex: 1;
`;

export interface MessagesProps {
  messages: IMessage[];
  onPress: () => void;
}

export const Messages = ({ messages, onPress }: MessagesProps) => (
  <MessagesView>
    <TouchableWithoutFeedback onPress={onPress}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        inverted
        renderItem={({ item }) => (
          <Message text={item.text} isUser={item.isUser} />
        )}
      />
    </TouchableWithoutFeedback>
  </MessagesView>
);
