const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const dynamoDB = new DynamoDBClient({ region: process.env.AWS_REGION });

module.exports = { dynamoDB };