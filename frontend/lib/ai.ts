import { OpenAI } from "openai";

const client = new OpenAI({
    // ------> WE CAN USE OPENLLM TO RUN THE AI LOCALLY <----------
    baseURL: "https://api.groq.com/openai/v1", // Example: "http://localhost:11434/v1" Currently using gorq
    apiKey: "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", // Example: "na" if no API key is needed,
    dangerouslyAllowBrowser : true // Just for testing
});

export async function getAIResponse(userInput: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile", // Example: "meta-llama/Llama-3.2-1B-Instruct"
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
