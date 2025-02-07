const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { SQSClient } = require("@aws-sdk/client-sqs");

const dynamoDB = new DynamoDBClient({ region: process.env.AWS_REGION });
const sqs = new SQSClient({ region: process.env.AWS_REGION });

module.exports = { dynamoDB, sqs };