const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Messaging API",
      version: "1.0.0",
      description: "API para enviar, recibir y eliminar mensajes",
    },
    servers: [
      {
        url: "http://localhost:3000", // Cambia esto a la URL de producción si es necesario
      },
    ],
  },
  apis: ["./routes/messageRoutes.js"], // Importa las rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
