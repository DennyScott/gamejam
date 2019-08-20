import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";

export const MessageInputView = styled.View`
  padding: 10px 5px;
  flex-direction: row-reverse;
`;

export const MessageTextInputView = styled.View`
  height: 30;
  justify-content: center;
  margin-right: 8;
`;

export const EnterMessageBubble = styled.View`
  border-radius: 20;
  padding: 10px;
  border: 1px solid #eee;
  flex-direction: row;
`;

export const ChatText = styled.Text`
  font-size: 16;
  color: #bbb;
`;

export interface MessageInputProps {
  onPress: () => void;
}

export const MessageInput = ({ onPress }: MessageInputProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <MessageInputView>
      <EnterMessageBubble>
        <MessageTextInputView>
          <ChatText>Enter Message Here</ChatText>
        </MessageTextInputView>
        <Icon
          name="send"
          color="#bbb"
          size={16}
          containerStyle={{ justifyContent: "center" }}
        />
      </EnterMessageBubble>
    </MessageInputView>
  </TouchableWithoutFeedback>
);
