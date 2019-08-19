import React, { useState } from "react";
import styled from "styled-components/native";
import { messageChoices, messages } from "./constants";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { DialogChooser } from "./DialogChooser";

const MessagesContainerView = styled.View`
  flex: 1;
`;

function MessagesContainer() {
  const [isChooserOpen, setIsChooserOpen] = useState(false);
  const [selectedDialogOptionIndex, setSelectedDialogOptionIndex] = useState(0);
  const [currentMessages, setCurrentMessages] = useState(() =>
    messages.reverse()
  );
  const [currentMessageChoices] = useState(() => messageChoices);

  function sendSelectedMessage() {
    setCurrentMessages([
      { isUser: true, text: messageChoices[selectedDialogOptionIndex].long },
      ...currentMessages
    ]);
  }

  return (
    <MessagesContainerView>
      <Messages
        messages={messages}
        onPress={() => isChooserOpen && setIsChooserOpen(false)}
      />
      {isChooserOpen ? (
        <DialogChooser
          choices={currentMessageChoices}
          selectedDialogOptionIndex={selectedDialogOptionIndex}
          onChooseDialogOption={setSelectedDialogOptionIndex}
          onSendDialogOption={sendSelectedMessage}
        />
      ) : (
        <MessageInput onPress={() => setIsChooserOpen(true)} />
      )}
    </MessagesContainerView>
  );
}

export default MessagesContainer;