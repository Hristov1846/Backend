import axios from "axios";

export const askAI = async (req, res) => {
  try {
    const { question, role } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Моля въведете въпрос." });
    }

    // Тук вкарваме AI API (пример с OpenAI)
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              role === "psychologist"
                ? "Ти си виртуален психолог, който дава съвети."
                : role === "fitness"
                ? "Ти си виртуален фитнес инструктор."
                : role === "diet"
                ? "Ти си виртуален диетолог."
                : "Ти си приятелски AI асистент.",
          },
          { role: "user", content: question },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiAnswer =
      response.data.choices[0].message?.content || "Няма отговор.";

    res.json({ answer: aiAnswer });
  } catch (error) {
    console.error("AI Error:", error.response?.data || error.message);
    res.status(500).json({
      message: "Проблем при връзката с AI.",
      error: error.message,
    });
  }
};
