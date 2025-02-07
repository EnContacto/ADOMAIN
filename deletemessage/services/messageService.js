const AWS = require("aws-sdk");
const { DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

AWS.config.update({
  region: "us-east-1"
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Messages";

exports.deleteMessage = async (messageId) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      messageId: messageId
    }
  };

  try {
    const result = await dynamoDB.delete(params).promise();
    if (!result) {
      throw new Error("Message doesn´t exists");
    }
    return { success: true, message: "Mensaje delete" };
  } catch (error) {
    console.error("Error ", error);
    throw new Error("Message can+t be delete");
  }
};
