const chatService = require('../services/chatService');
const aiConfig = require('../config/aiConfig');

const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;

function isSameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host;
    const requestHost = (req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim();
    return Boolean(requestHost) && originHost === requestHost;
  } catch {
    return false;
  }
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history.slice(-MAX_HISTORY_ITEMS).flatMap((item) => {
    if (!item || !['user', 'assistant'].includes(item.role) || typeof item.content !== 'string') return [];
    const content = item.content.trim().slice(0, MAX_MESSAGE_LENGTH);
    return content ? [{ role: item.role, content }] : [];
  });
}

async function reply(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  if (!isSameOrigin(req)) {
    return res.status(403).json({ error: 'Origem não autorizada.' });
  }

  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: 'Envie uma pergunta de até 1.200 caracteres.' });
  }

  if (!aiConfig.isConfigured()) {
    return res.status(503).json({ error: 'O assistente ainda não está configurado.' });
  }

  try {
    const answer = await chatService.createReply({
      message,
      history: normalizeHistory(req.body?.history)
    });
    return res.status(200).json({ answer });
  } catch (error) {
    console.error('[chat] Request failed', {
      status: error.status || null,
      code: error.code || error.cause?.code || error.name
    });
    return res.status(502).json({ error: 'Não foi possível responder agora. Tente novamente em instantes.' });
  }
}

module.exports = { reply };