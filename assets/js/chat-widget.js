(() => {
  const root = document.createElement('div');
  root.dataset.chatMount = '';
  document.body.append(root);

  fetch('/api/widget', { cache: 'no-store', headers: { Accept: 'text/html' } })
    .then((response) => {
      if (!response.ok) throw new Error('Widget unavailable');
      return response.text();
    })
    .then((markup) => {
      root.innerHTML = markup;
      initChat(root);
    })
    .catch(() => root.remove());

  function initChat(mount) {
    const panel = mount.querySelector('#portfolio-chat-panel');
    const toggle = mount.querySelector('[data-chat-toggle]');
    const close = mount.querySelector('[data-chat-close]');
    const form = mount.querySelector('[data-chat-form]');
    const input = form.elements.message;
    const messagesNode = mount.querySelector('[data-chat-messages]');
    const suggestions = mount.querySelector('[data-chat-suggestions]');
    const errorNode = mount.querySelector('[data-chat-error]');
    const sendButton = mount.querySelector('[data-chat-send]');
    const conversation = [];
    let isSending = false;

    const copy = {
      pt: {
        title: 'al.ai', status: 'Assistente do Henrique', inputLabel: 'Sua pergunta',
        placeholder: 'Pergunte sobre o Henrique...', note: 'Respostas geradas por IA com base neste portfólio.',
        launcher: 'Pergunte ao al.ai', open: 'Abrir conversa', close: 'Fechar conversa', send: 'Enviar mensagem',
        greeting: 'Olá! Eu sou al.ai, assistente virtual do Henrique. Pergunte sobre a trajetória, os projetos, a experiência, a formação ou as tecnologias dele.',
        prompts: ['O que Henrique está estudando?', 'Quais projetos ele desenvolveu?', 'Onde Henrique trabalha atualmente?', 'Quais tecnologias ele usa?'],
        suggestions: ['Formação', 'Projetos', 'Experiência', 'Tecnologias'],
        sending: 'Pensando...', error: 'Não consegui responder agora. Tente novamente.',
        notConfigured: 'O chat ainda não está configurado. Adicione uma chave OpenAI válida em OPENAI_API_KEY no arquivo .env e reinicie o servidor.',
        limit: 'A pergunta deve ter até 1.200 caracteres.'
      },
      en: {
        title: 'al.ai', status: 'Henrique’s assistant', inputLabel: 'Your question',
        placeholder: 'Ask about Henrique...', note: 'AI answers based on this portfolio.',
        launcher: 'Ask al.ai', open: 'Open chat', close: 'Close chat', send: 'Send message',
        greeting: 'Hi! I’m al.ai, Henrique’s virtual assistant. Ask about his background, projects, experience, education, or technologies.',
        prompts: ['What is Henrique studying?', 'Which projects has he built?', 'Where does he currently work?', 'Which technologies does he use?'],
        suggestions: ['Education', 'Projects', 'Experience', 'Technologies'],
        sending: 'Thinking...', error: 'I could not answer right now. Please try again.',
        notConfigured: 'The chat is not configured yet. Add a valid OpenAI key to OPENAI_API_KEY in .env and restart the server.',
        limit: 'Your question must be 1,200 characters or fewer.'
      }
    };

    function currentCopy() {
      return document.documentElement.dataset.lang === 'en' ? copy.en : copy.pt;
    }

    function updateLanguage() {
      const text = currentCopy();
      mount.querySelector('#portfolio-chat-title').textContent = text.title;
      mount.querySelector('[data-chat-copy="status"]').textContent = text.status;
      mount.querySelector('[data-chat-copy="inputLabel"]').textContent = text.inputLabel;
      mount.querySelector('[data-chat-copy="placeholder"]').placeholder = text.placeholder;
      mount.querySelector('[data-chat-copy="note"]').textContent = text.note;
      mount.querySelector('[data-chat-copy="launcher"]').textContent = text.launcher;
      toggle.setAttribute('aria-label', panel.hidden ? text.open : text.close);
      close.setAttribute('aria-label', text.close);
      close.title = text.close;
      sendButton.setAttribute('aria-label', text.send);
      sendButton.title = text.send;
      mount.querySelector('[data-chat-greeting]').textContent = text.greeting;
      suggestions.querySelectorAll('[data-chat-suggestion]').forEach((button, index) => {
        button.textContent = text.suggestions[index];
        button.dataset.chatSuggestion = text.prompts[index];
      });
    }

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? currentCopy().close : currentCopy().open);
      if (open) input.focus();
    }

    function addMessage(content, role, pending = false) {
      const message = document.createElement('div');
      message.className = `portfolio-chat__message portfolio-chat__message--${role}${pending ? ' portfolio-chat__message--pending' : ''}`;
      message.textContent = content;
      messagesNode.append(message);
      messagesNode.scrollTop = messagesNode.scrollHeight;
      return message;
    }

    async function sendMessage(rawMessage) {
      const message = rawMessage.trim();
      if (!message || isSending) return;
      if (message.length > 1200) {
        errorNode.textContent = currentCopy().limit;
        errorNode.hidden = false;
        return;
      }

      isSending = true;
      errorNode.hidden = true;
      suggestions.hidden = true;
      addMessage(message, 'user');
      const pendingMessage = addMessage(currentCopy().sending, 'assistant', true);
      sendButton.disabled = true;
      input.disabled = true;

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ message, history: conversation.slice(-8) })
        });
        const data = await response.json();
        if (!response.ok || typeof data.answer !== 'string') {
          pendingMessage.remove();
          errorNode.textContent = response.status === 503 ? currentCopy().notConfigured : currentCopy().error;
          errorNode.hidden = false;
          return;
        }
        pendingMessage.classList.remove('portfolio-chat__message--pending');
        pendingMessage.textContent = data.answer;
        conversation.push({ role: 'user', content: message }, { role: 'assistant', content: data.answer });
      } catch {
        pendingMessage.remove();
        errorNode.textContent = currentCopy().error;
        errorNode.hidden = false;
      } finally {
        isSending = false;
        sendButton.disabled = false;
        input.disabled = false;
        input.focus();
        messagesNode.scrollTop = messagesNode.scrollHeight;
      }
    }

    toggle.addEventListener('click', () => setOpen(panel.hidden));
    close.addEventListener('click', () => setOpen(false));
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = input.value;
      input.value = '';
      sendMessage(message);
    });
    suggestions.addEventListener('click', (event) => {
      const button = event.target.closest('[data-chat-suggestion]');
      if (button) sendMessage(button.dataset.chatSuggestion);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) setOpen(false);
    });

    updateLanguage();
    new MutationObserver(updateLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
  }
})();