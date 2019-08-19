import React from "react";
import { Icon } from "react-native-elements";
import { IDialogChoice } from "../../types/message";
import styled from "styled-components/native";

export const DialogChoiceChosenView = styled.View``;

export const DialogChoiceBubble = styled.View`
  border-radius: 20;
  padding: 10px;
  margin: 10px;
  border: 1px solid #bbb;
  flex-direction: row;
`;

export const DialogTextView = styled.View`
  min-height: 30;
  justify-content: center;
  margin-right: 8;
  flex: 1;
`;

export const DialogSendIconView = styled.View`
  width: 20;
  justify-content: center;
  align-items: center;
`;

export const DialogText = styled.Text`
  color: #000;
  font-size: 16;
`;

export const DialogChoiceChosen = ({ text, onSendDialogOption }: IDialogChoice) => (<DialogChoiceChosenView>
  <DialogChoiceBubble>
    <DialogTextView>
      <DialogText>{text}</DialogText>
    </DialogTextView>
    <DialogSendIconView>
      <Icon name="send" color="#000" size={16} containerStyle={{ justifyContent: "center" }} onPress={onSendDialogOption} />
    </DialogSendIconView>
  </DialogChoiceBubble>
</DialogChoiceChosenView>);
