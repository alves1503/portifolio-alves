const OpenAI = require('openai');
const aiConfig = require('../config/aiConfig');
const { buildSystemPrompt } = require('../prompts/portfolioAssistant');

let client;

function getClient() {
  if (!aiConfig.isConfigured()) {
    const error = new Error('OpenAI API key is not configured');
    error.code = 'AI_NOT_CONFIGURED';
    throw error;
  }

  if (!client) {
    client = new OpenAI({
      apiKey: aiConfig.getApiKey(),
      timeout: 20000,
      maxRetries: 1
    });
  }

  return client;
}

async function createAnswer({ message, history, context }) {
  const completion = await getClient().chat.completions.create({
    model: aiConfig.getModel(),
    temperature: 0.3,
    max_completion_tokens: 500,
    messages: [
      { role: 'system', content: buildSystemPrompt(context) },
      ...history,
      { role: 'user', content: message }
    ]
  });

  const answer = completion.choices?.[0]?.message?.content;
  if (typeof answer !== 'string' || !answer.trim()) {
    const error = new Error('OpenAI returned an empty answer');
    error.code = 'EMPTY_RESPONSE';
    throw error;
  }

  return answer.trim().slice(0, 3000);
}

module.exports = { createAnswer };