class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message) {
    console.log(message);
    const msg = message.toLowerCase();

    if (msg.includes('hello')) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
