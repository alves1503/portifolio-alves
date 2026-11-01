const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 8;

const requestLog = globalThis.__portfolioChatRequestLog || new Map();
globalThis.__portfolioChatRequestLog = requestLog;

function rateLimit(req, res, next) {
  const forwardedFor = req.headers['x-forwarded-for'];
  const ip = (typeof forwardedFor === 'string' ? forwardedFor.split(',')[0] : '')
    .trim() || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const record = requestLog.get(ip);

  if (!record || now - record.startedAt >= WINDOW_MS) {
    requestLog.set(ip, { startedAt: now, count: 1 });
  } else if (record.count >= MAX_REQUESTS) {
    res.setHeader('Retry-After', String(Math.ceil((WINDOW_MS - (now - record.startedAt)) / 1000)));
    return res.status(429).json({ error: 'Limite temporário atingido. Tente novamente em um minuto.' });
  } else {
    record.count += 1;
  }

  if (requestLog.size > 1000) {
    for (const [key, value] of requestLog) {
      if (now - value.startedAt >= WINDOW_MS) requestLog.delete(key);
    }
  }

  return next();
}

module.exports = rateLimit;