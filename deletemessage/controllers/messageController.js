const messageService = require("../services/messageService");

exports.deleteMessage = async (req, res) => {
  const { messageId } = req.params;
  
  try {
    const response = await messageService.deleteMessage(messageId);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: "Message can´t be delete" });
  }
};