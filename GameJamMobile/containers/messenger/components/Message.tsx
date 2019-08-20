import React from "react";
import { IMessage } from "../../../types/message";
import { MessageBubble } from "./MessageBubble";
import styled from "styled-components/native";

export const MessageView = styled.View`
  padding-left: 14;
  padding-right: 14;
  padding-top: 4;
  margin-top: 10;
  flex-direction: ${(props: IMessage) => (props.isUser ? "row-reverse" : "row")};
`;

export const Message = ({ text, isUser }: IMessage) => (
  <MessageView isUser={isUser}>
    <MessageBubble text={text} isUser={isUser} />
  </MessageView>
);
