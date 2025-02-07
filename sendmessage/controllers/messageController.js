const AWS = require("aws-sdk");
const messageService = require("../services/messageService");

// Configure connection to AWS DynamoDB (production environment)
AWS.config.update({
  region: "us-east-1" // Make sure this is the correct AWS region
});

const dynamoDB = new AWS.DynamoDB();

// Check if the Messages table exists in AWS
const ensureTableExists = async () => {
  try {
    await dynamoDB.describeTable({ TableName: "Messages" }).promise();
    console.log("The Messages table already exists in AWS DynamoDB.");
  } catch (error) {
    if (error.code === "ResourceNotFoundException") {
      console.error("The Messages table does not exist in AWS. You must create it manually in the AWS console.");
    } else {
      console.error("Error checking the Messages table in AWS DynamoDB:", error);
    }
  }
};

// Check table existence in AWS on startup
ensureTableExists();

exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message, timestamp } = req.body;
    if (!sender || !receiver || !message || !timestamp) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = await messageService.createMessage({ sender, receiver, message, timestamp });

    res.status(201).json({ message: "Message successfully saved", messageId: newMessage.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending the message" });
  }
};
