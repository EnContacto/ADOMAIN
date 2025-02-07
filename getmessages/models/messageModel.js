module.exports = class Message {
    constructor(messageId, senderId, receiverId, messageText, timestamp) {
      this.messageId = messageId;
      this.senderId = senderId;
      this.receiverId = receiverId;
      this.messageText = messageText;
      this.timestamp = timestamp;
    }
  };
  