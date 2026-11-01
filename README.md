# Portfólio de Henrique Alves

Portfólio pessoal responsivo com projetos, experiência, tecnologias, formação e contato. Inclui o **al.ai**, um assistente sobre o portfólio que usa OpenAI `gpt-4o-mini` e conteúdo Markdown para responder perguntas.

## Funcionalidades

- Interface responsiva com tema claro/escuro e conteúdo em português e inglês.
- Seções de perfil, tecnologias, projetos, experiência, formação e contato.
- Widget de chat al.ai renderizado com Handlebars e servido pela API Express.
- Recuperação de contexto a partir de `data/knowledge/` para fundamentar respostas sobre Henrique.
- Validação de origem, limite de tamanho das mensagens e rate limit local.
- Endpoint `/health` para health checks da hospedagem.

## Stack

- HTML, CSS e JavaScript.
- Node.js 20+, Express e Handlebars.
- OpenAI API com `gpt-4o-mini` como modelo padrão.
- Markdown como base de conhecimento do assistente.

## Requisitos

- Node.js 20 ou superior.
- Uma chave da OpenAI para habilitar respostas do assistente.

## Executar localmente

Instale as dependências e crie seu arquivo de ambiente a partir do exemplo:

```powershell
Copy-Item .env.example .env
npm ci
npm run dev
```

No macOS/Linux, use `cp .env.example .env` no lugar de `Copy-Item`. Edite `.env` e preencha `OPENAI_API_KEY`; o valor de exemplo é apenas um placeholder. Acesse `http://localhost:3000`.

Para iniciar como em produção, use `npm start`.

## Variáveis de ambiente

| Variável | Obrigatória | Padrão | Descrição |
| --- | --- | --- | --- |
| `OPENAI_API_KEY` | Sim para o chat | Sem valor | Chave privada da plataforma OpenAI. |
| `OPENAI_MODEL` | Não | `gpt-4o-mini` | Modelo usado para gerar respostas. |
| `PORT` | Não | `3000` | Porta HTTP; normalmente definida pelo provedor de hospedagem. |

Nunca publique o `.env` nem inclua chaves no HTML, JavaScript do navegador ou no histórico do Git. O `.gitignore` exclui arquivos de ambiente reais e permite versionar apenas `.env.example`.

## Endpoints

| Método | Caminho | Uso |
| --- | --- | --- |
| `GET` | `/` | Página do portfólio. |
| `GET` | `/api/widget` | Template Handlebars do widget. |
| `POST` | `/api/chat` | Envia uma pergunta ao assistente. |
| `GET` | `/health` | Health check da aplicação. |

O endpoint de chat aceita JSON com `message` e, opcionalmente, `history`. As respostas sobre Henrique devem se basear nos documentos do portfólio; informações ausentes não devem ser inventadas.

## Estrutura

```text
assets/                 CSS, JavaScript, imagens e currículo
data/knowledge/         Perfil, formação, experiência e projetos em Markdown
src/config/             Configuração da IA
src/controllers/        Controllers HTTP
src/middleware/         Validação e rate limit
src/prompts/            Identidade e regras do al.ai
src/routes/             Rotas Express
src/services/           OpenAI, conversa e recuperação de contexto
views/                  Template Handlebars do chat
server.js               Inicialização do Express e rotas da aplicação
index.html              Página do portfólio
```

## Deploy

O projeto é uma aplicação Node.js convencional e não depende de Vercel nem de Docker. Em um provedor Node (como Render, Railway ou VPS):

1. Use Node.js 20 ou superior.
2. Configure `npm ci` como comando de instalação.
3. Configure `npm start` como comando de inicialização.
4. Cadastre `OPENAI_API_KEY` nas variáveis privadas do provedor e, se necessário, `OPENAI_MODEL`.
5. Configure o health check em `/health`, se a plataforma oferecer essa opção.

O servidor escuta em `0.0.0.0` e usa a porta informada em `PORT`. Não envie credenciais no repositório; configure-as diretamente no painel do serviço de hospedagem.

### Limitações conhecidas

- A busca da base Markdown é local e baseada em relevância textual; não é fine-tuning nem uma base vetorial.
- O rate limit usa memória do processo. Para várias instâncias ou maior escala, substitua-o por um limitador distribuído.
- A chave OpenAI é necessária para respostas do chat; a página e o widget podem ser servidos sem ela.

## Conteúdo da base de conhecimento

Atualize os arquivos em `data/knowledge/` para corrigir ou acrescentar fatos sobre perfil, formação, experiência e projetos. Mantenha informações verificáveis e não inclua dados pessoais que não devam ser públicos.

## Contribuições

1. Faça um fork e crie uma branch para sua alteração.
2. Mantenha credenciais e dados pessoais fora dos commits.
3. Descreva as mudanças e os testes realizados no pull request.

Ainda não há um arquivo de licença neste repositório. Adicione uma licença explícita antes de autorizar reutilização ou redistribuição do código.
