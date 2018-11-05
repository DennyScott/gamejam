import React from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native'
import { Icon, ButtonGroup } from 'react-native-elements';

const MessagesView = styled.View`
  flex: 1;
`;

const Messages = ({ messages, onPress }) => (
  <MessagesView>
    <TouchableWithoutFeedback onPress={onPress}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        inverted
        renderItem={({ item }) =>
          <Message
            text={item.text}
            isUser={item.isUser} 
          />
        }
      />
    </TouchableWithoutFeedback>
  </MessagesView>
);

const MessageView = styled.View`
    padding-left: 14;
    padding-right: 14;
    padding-top: 4;
    margin-top: 10;
    flex-direction: ${props => props.isUser ? 'row-reverse' : 'row'};
`;

const Message = ({ text, isUser }) => (
    <MessageView isUser={isUser}>
      <MessageBubble text={text} isUser={isUser} />
    </MessageView>
);

const MessageBubbleView = styled.View`
    max-width: 300;
    border-radius: 10;
    padding: 10px;
    background-color: ${props => props.isUser ? '#33c' : '#ddd'};
`;

const MessageBubble = ({ text, isUser }) => (
  <MessageBubbleView isUser={isUser}>
      <MessageText text={text} isUser={isUser} />
  </MessageBubbleView>
);

const MessageTextView = styled.Text`
    font-size: 16;
    color: ${props => props.isUser ? '#fff' : '#000'};
`;

const MessageText = ({ text, isUser }) => (
  <MessageTextView isUser={isUser}>
    {text}
  </MessageTextView>
);

const MessageInputView = styled.View`
  padding: 10px 5px;
  flex-direction: row-reverse;
`;

const MessageTextInputView = styled.View`
  height: 30;
  justify-content: center;
  margin-right: 8;
`;

const EnterMessageBubble = styled.View`
  border-radius: 20;
  padding: 10px;
  border: 1px solid #eee;
  flex-direction: row;
`;

const ChatText = styled.Text`
  font-size: 16;
  color: #bbb;
`;

const MessageInput = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <MessageInputView>
      <EnterMessageBubble>
        <MessageTextInputView>
          <ChatText>Enter Message Here</ChatText>
        </MessageTextInputView>
        <Icon name='send' color='#bbb' size={16} containerStyle={{justifyContent: "center"}}/>
      </EnterMessageBubble>
    </MessageInputView>
  </TouchableWithoutFeedback>
)

const DialogChoicesView = styled.View``;

const DialogChoices = ({ choices, onChooseDialogOption, selectedDialogOptionIndex }) => (
  <DialogChoicesView>
    <ButtonGroup 
      buttons={choices}
      containerStyle={{height: 50}}
      textStyle={{textAlign: 'center'}}
      selectedIndex={selectedDialogOptionIndex}
      onPress={onChooseDialogOption}
    />
  </DialogChoicesView>
)

const DialogChoiceChosenView = styled.View``;

const DialogChoiceBubble = styled.View`
  border-radius: 20;
  padding: 10px;
  margin: 10px;
  border: 1px solid #bbb;
  flex-direction: row;
`;

const DialogTextView = styled.View`
  min-height: 30;
  justify-content: center;
  margin-right: 8;
  flex: 1;
`;

const DialogSendIconView = styled.View`
  width: 20;
  justify-content: center;
  align-items: center;
`;

const DialogText = styled.Text`
  color: #000;
  font-size: 16;
`;

const DialogChoiceChosen = ({ text, onSendDialogOption }) => (
  <DialogChoiceChosenView>
    <DialogChoiceBubble>
      <DialogTextView>
        <DialogText>{text}</DialogText>
      </DialogTextView>
      <DialogSendIconView>
        <Icon
          name='send'
          color='#000'
          size={16}
          containerStyle={{justifyContent: "center"}}
          onPress={onSendDialogOption}
        />
      </DialogSendIconView>
    </DialogChoiceBubble>
  </DialogChoiceChosenView>
)

const DialogChooserView = styled.View``;

const DialogChooser = ({ choices, onSendDialogOption, onChooseDialogOption, selectedDialogOptionIndex }) => (
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

const MessagesContainerView = styled.View`
  flex: 1;
`;

export default class MessagesContainer extends React.Component {
  state = {
    isChooserOpen: false,
    selectedDialogOptionIndex: 0,
    messages: messages.reverse(),
    messageChoices: messageChoices,
  };

  sendSelectedMessage() {
    const selectedMessage = this.state.messageChoices[this.state.selectedDialogOptionIndex].long;
    this.setState({
      messages: [
        { isUser: true, text: selectedMessage },
        ...this.state.messages,
      ]
    })
  }

  render() {
    return (
      <MessagesContainerView>
        <Messages 
          messages={this.state.messages} 
          onPress={() => this.state.isChooserOpen && this.setState({isChooserOpen: false})} 
        />
        {
          this.state.isChooserOpen ?
            <DialogChooser
              choices={this.state.messageChoices} 
              selectedDialogOptionIndex={this.state.selectedDialogOptionIndex}
              onChooseDialogOption={selectedDialogOptionIndex => this.setState({selectedDialogOptionIndex})}
              onSendDialogOption={() => this.sendSelectedMessage() }
            /> :
            <MessageInput 
              onPress={() => this.setState({ isChooserOpen: true })}
            />
        }
      </MessagesContainerView>
    );
  }
}

const messageChoices = [
  { 
    short: 'Yes',
    long: `Yes I'm all in, let's do it!  I am a little worried about the fallout, but its the best option we have...`,
  },
  { 
    short: 'No',
    long: `THAT'S A STUPID IDEA.  YOU'RE STUPID!!!`,
  },
  { 
    short: 'Some Gibberish',
    long: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  },
]

const messages = [
  {
    text: 'Hey whats up!',
    isUser: true,
  },
  {
    text: 'Nothing',
    isUser: false,
  },
  {
    text: 'Cool',
    isUser: true,
  },
  {
    text: 'This is the greatest conversation Ive ever seen',
    isUser: false,
  },
  {
    text: 'Oh Im sorry do you have something better to talk about?  Im sick of your constant sass, I have better friends then you you know',
    isUser: true,
  },
  {
    text: 'K',
    isUser: false,
  },
  {
    text: 'You need help',
    isUser: false,
  },
  {
    text: 'Hey whats up!',
    isUser: true,
  },
  {
    text: 'Nothing',
    isUser: false,
  },
  {
    text: 'Cool',
    isUser: true,
  },
  {
    text: 'This is the greatest conversation Ive ever seen',
    isUser: false,
  },
  {
    text: 'Oh Im sorry do you have something better to talk about?  Im sick of your constant sass, I have better friends then you you know',
    isUser: true,
  },
  {
    text: 'K',
    isUser: false,
  },
  {
    text: 'You need help',
    isUser: false,
  },
  {
    text: 'Hey whats up!',
    isUser: true,
  },
  {
    text: 'Nothing',
    isUser: false,
  },
  {
    text: 'Cool',
    isUser: true,
  },
  {
    text: 'This is the greatest conversation Ive ever seen',
    isUser: false,
  },
  {
    text: 'Oh Im sorry do you have something better to talk about?  Im sick of your constant sass, I have better friends then you you know',
    isUser: true,
  },
  {
    text: 'K',
    isUser: false,
  },
  {
    text: 'You need help',
    isUser: false,
  },
]