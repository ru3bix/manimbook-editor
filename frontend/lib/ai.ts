import { OpenAI } from "openai";

const client = new OpenAI({
    baseURL: "YOUR_LOCAL_SERVER_URL", // Example: "http://localhost:11434/v1"
    apiKey: "YOUR_API_KEY", // Example: "na" if no API key is needed
});

export async function getAIResponse(userInput: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "YOUR_MODEL_NAME", // Example: "meta-llama/Llama-3.2-1B-Instruct"
            messages: [{ role: "user", content: userInput }],
            stream: true,
        });

        let finalResponse = "";
        for await (const chunk of response) {
            finalResponse += chunk.choices[0]?.delta?.content || "";
        }

        return finalResponse;
    } catch (error) {
        throw new Error(`OpenAI API Error: ${error}`);
    }
}
