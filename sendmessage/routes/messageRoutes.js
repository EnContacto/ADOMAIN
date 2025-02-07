const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

/**
 * @swagger
 * /messages/send:
 *   post:
 *     summary: Sends a message
 *     description: Allows sending a message to another user.
 *     tags:
 *       - Messages
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sender:
 *                 type: string
 *                 example: "user123"
 *               receiver:
 *                 type: string
 *                 example: "user456"
 *               message:
 *                 type: string
 *                 example: "Hello, how are you?"
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-02-05T18:30:00Z"
 *     responses:
 *       201:
 *         description: Message successfully sent
 *       400:
 *         description: Bad request
 */
router.post("/send", messageController.sendMessage);

module.exports = router;
