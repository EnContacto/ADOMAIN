const express = require("express");
const { getMessages } = require("../controllers/messageController");
const router = express.Router();

router.get("/get/:receiverId", getMessages);

/**
 * @swagger
 * /messages/get/{receiverId}:
 *   get:
 *     summary: Retrieves user messages
 *     description: Returns the list of messages for a specific user.
 *     tags:
 *       - Messages
 *     parameters:
 *       - in: path
 *         name: receiverId
 *         required: true
 *         schema:
 *           type: string
 *         example: "user456"
 *     responses:
 *       200:
 *         description: Message list successfully retrieved
 *       404:
 *         description: User not found
 */
module.exports = router;
