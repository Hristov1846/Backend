import express from "express";

const router = express.Router();

// Примерен AI endpoint
router.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;

    // TODO: тук можеш да вържеш OpenAI или друг модел
    res.json({ reply: `🤖 AI Assistant: ${message}` });
  } catch (error) {
    console.error("AI Route Error:", error);
    res.status(500).json({ error: "AI service failed" });
  }
});

export default router;
