const fs = require('node:fs');
const path = require('node:path');

const knowledgeDirectory = path.join(__dirname, '..', '..', 'data', 'knowledge');
const MAX_CONTEXT_CHARACTERS = 9000;
const stopWords = new Set([
  'a', 'as', 'o', 'os', 'um', 'uma', 'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'e', 'ou',
  'que', 'qual', 'quais', 'como', 'sobre', 'para', 'por', 'com', 'me', 'mim', 'voce', 'seu', 'sua',
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'for', 'with', 'about', 'what', 'how', 'is', 'are'
]);

function tokenize(text) {
  return new Set((text.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/[\p{L}\p{N}]+/gu) || [])
    .filter((token) => token.length > 2 && !stopWords.has(token)));
}

function normalize(text) {
  return text.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function loadDocuments(directory = knowledgeDirectory) {
  return fs.readdirSync(directory, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name)).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return loadDocuments(filePath);
    if (!entry.isFile() || !entry.name.endsWith('.md')) return [];

    const content = fs.readFileSync(filePath, 'utf8');
    let heading = '';
    let paragraph = [];
    const fileDocuments = [];
    const flushParagraph = () => {
      const text = paragraph.join('\n').trim();
      if (text) {
        fileDocuments.push({
          source: path.relative(knowledgeDirectory, filePath),
          text: heading ? `${heading}\n${text}` : text
        });
      }
      paragraph = [];
    };

    for (const line of content.split(/\r?\n/)) {
      const trimmedLine = line.trim();
      if (/^#{1,6}\s/.test(trimmedLine)) {
        flushParagraph();
        heading = trimmedLine;
      } else if (!trimmedLine) {
        flushParagraph();
      } else {
        paragraph.push(line);
      }
    }
    flushParagraph();

    return fileDocuments;
  });
}

const documents = loadDocuments();

function findRelevantContext(query) {
  const queryTokens = tokenize(query);
  const normalizedQuery = normalize(query.trim());
  const hiringIntent = /\b(?:contrat\w*|escolh\w*|selecion\w*|vaga|processo\s+seletivo|candidat\w*|hiring|hire|recruit\w*|candidate|choose|select)\b/.test(normalizedQuery);
  const projectIntent = /\b(?:projet\w*|project\w*|repositori\w*|repository|repositories|portifolio|portfolio)\b/.test(normalizedQuery);
  const ranked = documents.map((document) => {
    const documentTokens = tokenize(document.text);
    let score = 0;
    for (const token of queryTokens) {
      if (documentTokens.has(token)) score += 1 + Math.min(token.length, 10) / 10;
    }
    if (normalizedQuery.length > 3 && normalize(document.text).includes(normalizedQuery)) score += 8;
    return { ...document, score };
  });

  const relevant = ranked.filter((document) => document.score > 0)
    .sort((left, right) => right.score - left.score || left.source.localeCompare(right.source))
    .slice(0, 6);
  const hiringEvidence = hiringIntent ? [
    ranked.find((document) => document.source === 'experiencia.md' && normalize(document.text).includes('assistente de ti')),
    ranked.find((document) => document.source === 'projetos.md' && normalize(document.text).includes('alves.crm')),
    ranked.find((document) => document.source === 'perfil.md' && normalize(document.text).includes('desenvolvedor full-stack')),
    ranked.find((document) => document.source === 'formacao.md' && normalize(document.text).includes('analise e desenvolvimento de sistemas'))
  ].filter(Boolean) : [];
  const projectEvidence = projectIntent ? ranked.filter((document) => document.source === 'projetos.md') : [];
  const fallback = ranked.filter((document) => path.basename(document.source) === 'perfil.md').slice(0, 4);
  const selected = hiringEvidence.length ? hiringEvidence : projectEvidence.length ? projectEvidence : relevant.length ? relevant : fallback;

  let context = '';
  for (const document of selected) {
    const section = `[${document.source}]\n${document.text}`;
    if (context.length + section.length > MAX_CONTEXT_CHARACTERS) break;
    context += `${context ? '\n\n' : ''}${section}`;
  }

  return context;
}

module.exports = { findRelevantContext };