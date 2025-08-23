import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// @desc Chat with AI Assistant
// @route POST /api/ai/chat
export const chatWithAI = async (req, res) => {
  try {
    const { role, message } = req.body;

    let systemPrompt = "You are a helpful assistant.";
    if (role === "psychologist") {
      systemPrompt = "You are a supportive psychologist helping with emotions and mental health.";
    } else if (role === "fitness") {
      systemPrompt = "You are a professional fitness coach providing workout advice.";
    } else if (role === "diet") {
      systemPrompt = "You are a nutrition expert giving diet and health recommendations.";
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ message: "AI Assistant error", error: error.message });
  }
};
