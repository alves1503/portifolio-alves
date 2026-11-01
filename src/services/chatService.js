const knowledgeService = require('./knowledgeService');
const openaiService = require('./openaiService');

function isCodeGenerationRequest(message) {
  const normalized = message.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const asksForGeneration = /\b(?:gere|gerar|escreva|escrever|crie|criar|faca|fazer|implemente|implementar|write|generate|create|build|implement|show|give)\b/.test(normalized);
  const requestsCodeArtifact = /\b(?:codigo|code|script|funcao|function|programa|program|snippet|hello?\s*world)\b/.test(normalized);
  const requestsExample = /\b(?:exemplo|example)\b/.test(normalized);
  const programmingTopic = /\b(?:java|javascript|typescript|python|php|node|react|html|css|sql|spring|programacao|programming)\b/.test(normalized);

  return (asksForGeneration && (requestsCodeArtifact || (requestsExample && programmingTopic)))
    || (/\bhel{1,2}o\s*world\b/.test(normalized) && programmingTopic);
}

function codeGenerationReply(message) {
  const normalized = message.toLocaleLowerCase('pt-BR');
  const isEnglish = /\b(?:how|what|which|tell|please|could|would|write|generate|create|build|implement|show|give|code|function|script|program|example)\b/.test(normalized);
  return isEnglish
    ? 'I can explain the concept or outline an approach, but I can’t generate code or executable scripts.'
    : 'Posso explicar o conceito ou sugerir uma abordagem, mas não gero código nem scripts executáveis.';
}

function isHiringQuestion(message) {
  const normalized = message.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return /\b(?:contrat\w*|escolh\w*|selecion\w*|processo\s+seletivo|candidat\w*|vaga|recomend\w*|hire|hiring|recruit\w*|candidate|choose|select|position|job)\b/.test(normalized);
}

function hiringReply(message) {
  const normalized = message.toLocaleLowerCase('pt-BR');
  const isEnglish = /\b(?:why|hire|hiring|recruit|candidate|choose|select|position|job)\b/.test(normalized);

  return isEnglish
    ? 'Henrique is worth considering for a developer role based on documented experience: as an IT Assistant at Lider Interiores, he develops and maintains web applications, APIs, and business solutions. He also developed Alves.CRM, which brings together WhatsApp support, lead management, GPT-4o mini, RAG, and human handoff. He is pursuing a degree in Systems Analysis and Development at PUC Minas and currently deepening his studies in Java, Spring Boot, and AWS. His fit depends on the role requirements. Project details: https://github.com/alves1503/crm-alves.'
    : 'Henrique pode ser considerado para uma vaga de desenvolvimento por combinar experiência profissional e projeto prático. Como Assistente de TI na Lider Interiores, desenvolve e mantém aplicações web, APIs e soluções para o negócio. Também desenvolveu o Alves.CRM, que reúne atendimento via WhatsApp, gestão de leads, GPT-4o mini, RAG e encaminhamento para uma pessoa. Está cursando Análise e Desenvolvimento de Sistemas na PUC Minas e aprofundando os estudos em Java, Spring Boot e AWS. A aderência depende dos requisitos da vaga. Projeto: https://github.com/alves1503/crm-alves.';
}

async function createReply({ message, history }) {
  if (isCodeGenerationRequest(message)) return codeGenerationReply(message);
  if (isHiringQuestion(message)) return hiringReply(message);

  const context = knowledgeService.findRelevantContext(message);
  return openaiService.createAnswer({ message, history, context });
}

module.exports = { createReply };