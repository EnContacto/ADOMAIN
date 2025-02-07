const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1" // Usa la región donde creaste la tabla
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Messages"; // Asegurar que sea el mismo nombre exacto

exports.createMessage = async (messageData) => {
  try {
    const params = {
      TableName: TABLE_NAME, // Debe coincidir exactamente con el nombre en AWS
      Item: {
        messageId: Date.now().toString(), // Generar un ID único
        sender: messageData.sender,
        receiver: messageData.receiver,
        message: messageData.message,
        timestamp: messageData.timestamp
      }
    };

    await dynamoDB.put(params).promise();
    return { id: params.Item.messageId };
  } catch (error) {
    console.error("Error al insertar mensaje en DynamoDB:", error);
    throw error;
  }
};
