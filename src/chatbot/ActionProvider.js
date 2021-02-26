class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  addChatBotMessageToState = (botMsg) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMsg],
    }));
  };

  greet = () => {
    const message = this.createChatBotMessage('Hello there', { delay: 20 });
    this.addChatBotMessageToState(message);
  };
}
export default ActionProvider;
