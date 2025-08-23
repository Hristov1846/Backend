import axios from "axios";

export const askAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Моля, задай въпрос." });
    }

    // Тук може да извикаш външен AI API (примерно OpenAI или друг)
    // Засега ще върнем примерен отговор:
    const fakeResponse = `AI отговор на твоя въпрос: "${question}"`;

    return res.json({ answer: fakeResponse });
  } catch (error) {
    console.error("AI Assistant грешка:", error.message);
    res.status(500).json({ message: "Грешка при обработка на AI заявката." });
  }
};
