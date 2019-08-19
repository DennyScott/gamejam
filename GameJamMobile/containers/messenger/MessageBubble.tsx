import React from "react";
import { IMessage } from "../../types/message";
import { MessageText } from "./MessageText";
import styled from "styled-components/native";

export const MessageBubbleView = styled.View`
  max-width: 300;
  border-radius: 10;
  padding: 10px;
  background-color: ${(props: IMessage) => (props.isUser ? "#33c" : "#ddd")};
`;

export const MessageBubble = ({ text, isUser }: IMessage) => (
  <MessageBubbleView isUser={isUser}>
    <MessageText text={text} isUser={isUser} />
  </MessageBubbleView>
);
