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

// Cargar rutas correctamente
app.use("/messages", messageRoutes);

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  logger.info(`sendmessage service running on port ${PORT}`);
});
