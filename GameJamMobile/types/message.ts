export interface IMessage {
  text: string;
  isUser: boolean;
}

export interface IMessageChoice {
  short: string;
  long: string;
}

export interface IDialogChoice {
  text: string;
  onSendDialogOption: () => void;
}
