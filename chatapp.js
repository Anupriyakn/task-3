import React, { Component } from 'react';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;
    if (newMessage.trim() === '') return;

    this.setState({
      messages: [...messages, { text: newMessage }],
      newMessage: '',
    });
  };

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="chat-message">
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={this.handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={this.handleSendMessage}>Send</button>
      </div>
    );
  }
}

export default Chat;
