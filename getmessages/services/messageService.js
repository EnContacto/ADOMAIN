const AWS = require("aws-sdk");
const { ScanCommand } = require("@aws-sdk/client-dynamodb");

AWS.config.update({
  region: "us-east-1"
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Messages";

exports.getMessages = async (receiverId) => {
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: "receiverId = :r",
    ExpressionAttributeValues: {
      ":r": receiverId
    }
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    return data.Items.map(item => ({
      messageId: item.messageId,
      senderId: item.senderId,
      receiverId: item.receiverId,
      messageText: item.messageText,
      timestamp: item.timestamp
    }));
  } catch (error) {
    console.error("Error retrieving messages:", error);
    throw new Error("Unable to fetch messages");
  }
};