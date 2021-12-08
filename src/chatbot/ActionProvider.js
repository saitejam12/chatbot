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

  handleOptions = () => {};
  greet = () => {
    const message = this.createChatBotMessage('Well Hello there', { delay: 20 });
    this.addChatBotMessageToState(message);
  };
}
export default ActionProvider;
