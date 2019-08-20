import React from "react";
import { DialogChoices } from "./DialogChoices";
import { DialogChoiceChosen } from "./DialogChoiceChosen";
import { IMessageChoice } from "../../../types/message";
import styled from "styled-components/native";

export const DialogChooserView = styled.View``;

export interface DialogChooserProps {
  choices: IMessageChoice[];
  onSendDialogOption: () => void;
  onChooseDialogOption: (selectedDialogOptionIndex: number) => void;
  selectedDialogOptionIndex: number;
}

export const DialogChooser = ({
  choices,
  onSendDialogOption,
  onChooseDialogOption,
  selectedDialogOptionIndex
}: DialogChooserProps) => (
  <DialogChooserView>
    <DialogChoices
      choices={choices.map(e => e.short)}
      onChooseDialogOption={onChooseDialogOption}
      selectedDialogOptionIndex={selectedDialogOptionIndex}
    />
    <DialogChoiceChosen
      text={choices[selectedDialogOptionIndex].long}
      onSendDialogOption={onSendDialogOption}
    />
  </DialogChooserView>
);
