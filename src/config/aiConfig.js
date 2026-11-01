const DEFAULT_MODEL = 'gpt-4o-mini';

function getApiKey() {
  return process.env.OPENAI_API_KEY?.trim() || '';
}

function getModel() {
  return process.env.OPENAI_MODEL?.trim() || DEFAULT_MODEL;
}

function isConfigured() {
  const apiKey = getApiKey();
  return Boolean(apiKey) && apiKey !== 'cole_sua_chave_aqui';
}

module.exports = { getApiKey, getModel, isConfigured };