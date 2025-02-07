const AWS = require("aws-sdk");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const messageRoutes = require("./routes/messageRoutes");
const morgan = require("morgan");
const winston = require("winston");
const { swaggerDocs, swaggerUi } = require("./swagger");

dotenv.config();

// Configurar AWS DynamoDB
AWS.config.update({
  region: "us-east-1"
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

// Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/messages", messageRoutes);

const PORT = process.env.PORT || 3003;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  logger.info(`deletemessage service running on port ${PORT}`);
});