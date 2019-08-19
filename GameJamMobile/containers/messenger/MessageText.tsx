import React from "react";
import { IMessage } from "../../types/message";
import styled from "styled-components/native";

export const MessageTextView = styled.Text`
  font-size: 16;
  color: ${(props: IMessage) => (props.isUser ? "#fff" : "#000")};
`;

export const MessageText = ({ text, isUser }: IMessage) => (
  <MessageTextView isUser={isUser}>{text}</MessageTextView>
);
