import React from "react";
import { ButtonGroup } from "react-native-elements";
import styled from "styled-components/native";

const DialogChoicesView = styled.View``;

interface DialogChoicesProps {
  choices: string[];
  onChooseDialogOption: (selectedDialogOptionIndex: number) => void;
  selectedDialogOptionIndex: number;
}

export const DialogChoices = ({
  choices,
  onChooseDialogOption,
  selectedDialogOptionIndex
}: DialogChoicesProps) => (
  <DialogChoicesView>
    <ButtonGroup
      buttons={choices}
      containerStyle={{ height: 50 }}
      textStyle={{ textAlign: "center" }}
      selectedIndex={selectedDialogOptionIndex}
      onPress={onChooseDialogOption}
    />
  </DialogChoicesView>
);
