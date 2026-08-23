const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

async function invokGeminiAi() {
    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: "Hell gemini ! Explain what is Interview"
    })

    console.log(response.text)
}

module.exports = invokGeminiAi