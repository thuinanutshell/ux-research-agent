const OpenAI = require('openai');
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateMessage = async() => {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        prompt: "Create a personalized message for this user",
        max_tokens: 30,
    });
    console.log(chatCompletion.choices[0].message.text);
}

generateMessage();