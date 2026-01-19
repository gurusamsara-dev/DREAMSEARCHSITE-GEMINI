import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROPERTIES } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are "DreamBot", the elite real estate concierge for "Dream Search Company".
You have exclusive access to our luxury property inventory:
${JSON.stringify(PROPERTIES.map(p => ({
  id: p.id,
  title: p.title,
  price: `$${p.price.toLocaleString()}`,
  location: p.address,
  type: p.type,
  highlights: p.features.join(', ')
})))}

Guidelines:
1. Provide personalized, high-end advice.
2. Only recommend properties from the provided list. 
3. If no exact match exists, suggest the closest luxury alternative.
4. Keep responses elegant and under 80 words.
5. Use a tone of "Sophisticated Professionalism".
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = getChatSession();
  return await chat.sendMessageStream({ message });
};