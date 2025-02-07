const express = require("express");
const { deleteMessage } = require("../controllers/messageController");
const router = express.Router();

router.delete("/delete/:messageId", deleteMessage);

/**
 * @swagger
 * /messages/delete/{messageId}:
 *   delete:
 *     summary: Deletes a message
 *     description: Allows deleting a message by its ID.
 *     tags:
 *       - Messages
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: string
 *         example: "msg789"
 *     responses:
 *       200:
 *         description: Message successfully deleted
 *       404:
 *         description: Message not found
 */
module.exports = router;