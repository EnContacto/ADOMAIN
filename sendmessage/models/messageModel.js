module.exports = class Message {
    constructor(senderId, receiverId, messageText, timestamp) {
      this.senderId = senderId;
      this.receiverId = receiverId;
      this.messageText = messageText;
      this.timestamp = timestamp;
    }
  };