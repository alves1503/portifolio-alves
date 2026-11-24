/* ==========================================================================
   PORTFÓLIO — SCRIPT PRINCIPAL
   Organizado por funcionalidade para facilitar manutenção.
   ========================================================================== */
(() => {
'use strict';

const translations = {
  pt: {
    title: 'Henrique Alves — Desenvolvedor Full-Stack',
    metaDescription: 'Portfólio profissional de Henrique Alves — desenvolvimento web, arquitetura de software e experiências digitais.',
    'a11y.skip': 'Pular para o conteúdo',
    'nav.about': 'Sobre',
    'nav.tech': 'Tecnologias',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'hero.hello': 'Olá, eu sou o Henrique Alves.',
    'hero.srTitle': 'Henrique Alves, desenvolvedor',
    'hero.subtitle': 'Desenvolvedor Full-Stack focado em soluções web escaláveis, integrações de sistemas e automações com IA, com atenção a performance, usabilidade e arquitetura sustentável.',
    'hero.ctaPrimary': 'Ver projetos',
    'hero.ctaSecondary': 'Baixar currículo',
    'hero.chatNow': 'agora',
    'hero.chatBubble': 'Pergunte sobre os projetos do Henrique.',
    'hero.statusTitle': 'Disponível para oportunidades',
    'hero.statusPlace': 'Minas Gerais, Brasil',
    'about.title': 'Sobre mim',
    'about.profileLabel': 'perfil',
    'about.role': 'Desenvolvedor Full-Stack',
    'about.cv': 'Currículo',
    'about.lead': 'Construo produtos digitais, APIs e automações que resolvem desafios reais com eficiência e escalabilidade.',
    'about.body1': 'Sou desenvolvedor Full-Stack e entrego código limpo, arquitetura robusta e interfaces intuitivas, sempre buscando resultados mensuráveis para usuários e negócios.',
    'about.body2': 'Atuo em back-end, integração de sistemas, automação e inteligência artificial, com Node.js, React, PHP, Python, MySQL, Docker e n8n. Busco evolução contínua e uma visão estratégica de tecnologia, produto e entrega.',
    'about.factNow': 'Hoje',
    'about.factNowValue': 'Assistente de TI na Lider Interiores',
    'about.factStudy': 'Estudando',
    'about.factStudyValue': 'Análise e Desenvolvimento de Sistemas na PUC Minas',
    'about.factFocus': 'Foco',
    'about.factFocusValue': 'Back-end, integrações e IA aplicada',
    'about.factBase': 'Base',
    'about.quote': 'Tudo o que fizerem, façam de todo o coração, como para o Senhor.',
    'about.signature': 'Colossenses 3:23',
    'tech.title': 'Tecnologias',
    'tech.subtitle': 'Ferramentas que uso para construir aplicações modernas e seguras.',
    'tech.frontend': 'Front-end',
    'tech.frontendText': 'Interfaces responsivas, acessíveis e rápidas.',
    'tech.backend': 'Back-end e dados',
    'tech.backendText': 'APIs, regras de negócio e bancos de dados.',
    'tech.cloud': 'Cloud, IA e ferramentas',
    'tech.cloudText': 'Deploy, automação e o dia a dia de desenvolvimento.',
    'tech.genai': 'IA generativa',
    'projects.title': 'Projetos selecionados',
    'projects.subtitle': 'Casos reais que mostram minha atuação em desenvolvimento web, back-end e experiência do usuário.',
    'projects.code': 'Código no GitHub',
    'projects.live': 'Ver ao vivo',
    'projects.viewCode': 'Ver código',
    'projects.viewLive': 'Ver ao vivo',
    'projects.alvesCrmTitle': 'Alves.CRM — Atendimento inteligente com IA',
    'projects.alvesCrmText': 'CRM web para gerenciar atendimentos, conversas via WhatsApp, leads e reuniões. Integra um agente GPT-4o mini com RAG para responder sobre serviços, qualificar leads e apoiar agendamentos, com encaminhamento para atendimento humano quando falta contexto.',
    'projects.qwenN8nTitle': 'Agente de IA para WhatsApp — Qwen e n8n',
    'projects.qwenN8nText': 'Laboratório experimental com Qwen 3.6 Plus, n8n, Evolution API, MySQL e RAG para consultar produtos e responder pelo WhatsApp. Explora agentes, ferramentas e testes de prompt injection; não é destinado a produção.',
    'projects.chatbotTitle': 'Chatbot inteligente para atendimento',
    'projects.chatbotText': 'Aplicação full-stack de atendimento automatizado com chat em tempo real, integração Gemini API, catálogo de produtos em banco de dados e documentação Swagger, com arquitetura clara e ambiente Docker.',
    'projects.complaintsTitle': 'Plataforma de gestão de denúncias',
    'projects.complaintsText': 'Solução acadêmica em ASP.NET Core MVC para registro, acompanhamento e gestão de denúncias, com autenticação, controle por perfil e persistência em SQL Server via Entity Framework.',
    'projects.editorsTitle': 'Conexão Editores',
    'projects.editorsText': 'Plataforma front-end para conectar clientes e editores de vídeo, com interface institucional, páginas de apresentação, cadastro e login, e navegação fluida entre seções.',
    'projects.accountTitle': 'Account — Simulador financeiro',
    'projects.accountText': 'Aplicação de terminal para simular operações bancárias como criação de conta, depósitos, saques e consultas de saldo, com armazenamento local em JSON.',
    'experience.title': 'Experiência profissional',
    'experience.current': 'Atual',
    'experience.liderMeta': '3 cargos, com crescimento interno até a área de TI',
    'experience.pucMeta': 'Monitoria acadêmica',
    'experience.itPeriod': 'Mar 2026 — atual',
    'experience.itTitle': 'Assistente de TI',
    'experience.itText': 'Desenvolvimento de aplicações web com PHP (MVC), HTML, CSS, JavaScript e Bootstrap, além de APIs REST e integrações Node.js. Implantação de soluções de IA, incluindo chatbots com RAG, embeddings e integração a bancos de dados para automação de processos.',
    'experience.planningPeriod': 'Out 2024 — Fev 2026',
    'experience.planningTitle': 'Assistente de planejamento e controle de produção',
    'experience.planningText': 'Apoio ao planejamento e controle de produção com relatórios, análise de dados, monitoramento de ordens e suporte à otimização de processos.',
    'experience.mentorPeriod': 'Ago 2025 — Dez 2025',
    'experience.mentorTitle': 'Monitor de projeto Front-End',
    'experience.mentorText': 'Mentoria acadêmica em engenharia de software, lógica, algoritmos e desenvolvimento web. Atuei em orientações práticas com Figma, HTML, CSS, JavaScript e Git.',
    'experience.traineePeriod': 'Ago 2026 — Set 2024',
    'experience.traineeTitle': 'Aprendiz administrativo',
    'experience.traineeText': 'Atuação como aprendiz administrativo, desenvolvendo organização, comunicação, trabalho em equipe e apoio às rotinas administrativas da empresa.',
    'education.title': 'Formação e aprendizado contínuo',
    'education.tabDegree': 'Graduação',
    'education.tabTech': 'Certificação técnica',
    'education.tabLang': 'Idiomas',
    'education.tabCourses': 'Cursos',
    'education.degreeTitle': 'Graduação em Análise e Desenvolvimento de Sistemas',
    'education.degreeMeta': 'Pontifícia Universidade Católica de Minas Gerais, 2025 a 2028',
    'education.degreeText': 'Formação voltada a engenharia de software, estruturas de dados e desenvolvimento web.',
    'education.techTitle': 'Formação técnica em qualificação profissional',
    'education.techMeta': 'Pontifícia Universidade Católica de Minas Gerais, 2025 a 2026',
    'education.techText': 'Fundamentos sólidos em lógica de programação, Front-End, Back-End, banco de dados e redes.',
    'education.langTitle': 'Inglês — Nível básico',
    'education.langMeta': 'KNN / Knowledge Now, desde 2025',
    'education.langText': 'Inglês em desenvolvimento, com capacidade para leitura de documentação técnica e compreensão de conteúdos de tecnologia.',
    'education.courseHtml': 'HTML5 e CSS3',
    'education.courseHtmlMeta': 'Curso em Vídeo, 2025',
    'education.courseAlgorithms': 'Algoritmos e lógica de programação',
    'education.courseAlgorithmsMeta': 'Udemy, 2025',
    'education.courseFigma': 'PRO FIGMA | UI DESIGN com Figma do zero ao especialista',
    'education.courseFigmaMeta': 'Udemy, 2025',
    'education.courseGemini': 'Imersão IA Google Gemini',
    'education.courseGeminiMeta': 'Alura, 2025',
    'education.courseGit': 'Git e GitHub do básico ao avançado',
    'education.courseGitMeta': 'Udemy, 2025',
    'education.courseWex': 'WEX - End to End Engineering',
    'education.courseWexMeta': 'DIO, 2025',
    'education.courseN8n': 'Santander 2025 - Automação com N8N',
    'education.courseN8nMeta': 'Udemy, 2025',
    'contact.cursor': 'você',
    'contact.title': 'Vamos construir algo relevante juntos?',
    'contact.subtitle': 'Aberto a novos projetos, parcerias e oportunidades.',
    'contact.text': 'Disponível para projetos em desenvolvimento web, automação e soluções digitais que geram valor real.',
    'form.name': 'Nome',
    'form.email': 'E-mail',
    'form.message': 'Mensagem',
    'form.submit': 'Enviar mensagem',
    'form.namePlaceholder': 'Seu nome',
    'form.emailPlaceholder': 'seu@email.com',
    'form.messagePlaceholder': 'Conte um pouco sobre seu projeto...',
    'form.invalid': 'Preencha nome, um e-mail válido e a mensagem antes de enviar.',
    'form.success': 'Seu aplicativo de e-mail deve abrir com a mensagem pronta. Obrigado pelo contato!',
    'footer.about': 'Sobre',
    'footer.tech': 'Tecnologias',
    'footer.projects': 'Projetos',
    'footer.experience': 'Experiência',
    'footer.education': 'Formação',
    'footer.contact': 'Contato',
    'footer.top': 'Voltar ao topo',
    'footer.copyright': '© <span id="year"></span> Henrique Alves. Todos os direitos reservados.',
    'aria.themeDark': 'Ativar tema escuro',
    'aria.themeLight': 'Ativar tema claro',
    'aria.menuOpen': 'Abrir menu',
    'aria.menuClose': 'Fechar menu'
  },
  en: {
    title: 'Henrique Alves — Full-Stack Developer',
    metaDescription: 'Professional portfolio of Henrique Alves — web development, software architecture and digital experiences.',
    'a11y.skip': 'Skip to content',
    'nav.about': 'About',
    'nav.tech': 'Technologies',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.hello': 'Hi, I’m Henrique Alves.',
    'hero.srTitle': 'Henrique Alves, developer',
    'hero.subtitle': 'Full-Stack developer focused on scalable web solutions, system integrations and AI automations, with strong attention to performance, usability and clean architecture.',
    'hero.ctaPrimary': 'See projects',
    'hero.ctaSecondary': 'Download résumé',
    'hero.chatNow': 'now',
    'hero.chatBubble': 'Ask about Henrique’s projects.',
    'hero.statusTitle': 'Open to opportunities',
    'hero.statusPlace': 'Minas Gerais, Brazil',
    'about.title': 'About me',
    'about.profileLabel': 'profile',
    'about.role': 'Full-Stack Developer',
    'about.cv': 'Résumé',
    'about.lead': 'I build digital products, APIs and automations that solve real problems with efficiency and scalability.',
    'about.body1': 'I am a Full-Stack developer who delivers clean code, robust architecture and intuitive interfaces, always aiming for measurable impact for users and businesses.',
    'about.body2': 'I work across back-end, systems integration, automation and AI, using Node.js, React, PHP, Python, MySQL, Docker and n8n. I keep evolving my technical skills and a strategic view of technology, product and delivery.',
    'about.factNow': 'Now',
    'about.factNowValue': 'IT Assistant at Lider Interiores',
    'about.factStudy': 'Studying',
    'about.factStudyValue': 'Systems Analysis and Development at PUC Minas',
    'about.factFocus': 'Focus',
    'about.factFocusValue': 'Back-end, integrations and applied AI',
    'about.factBase': 'Based in',
    'about.quote': 'Whatever you do, work at it with all your heart, as working for the Lord.',
    'about.signature': 'Colossians 3:23',
    'tech.title': 'Technologies',
    'tech.subtitle': 'The tools I use to build modern and reliable applications.',
    'tech.frontend': 'Front-end',
    'tech.frontendText': 'Responsive, accessible and fast interfaces.',
    'tech.backend': 'Back-end and data',
    'tech.backendText': 'APIs, business rules and databases.',
    'tech.cloud': 'Cloud, AI and tools',
    'tech.cloudText': 'Deployment, automation and everyday development.',
    'tech.genai': 'Generative AI',
    'projects.title': 'Selected projects',
    'projects.subtitle': 'Real cases that show my work in web development, back-end and user experience.',
    'projects.code': 'Code on GitHub',
    'projects.live': 'View live',
    'projects.viewCode': 'View code',
    'projects.viewLive': 'View live',
    'projects.alvesCrmTitle': 'Alves.CRM — AI-powered customer service',
    'projects.alvesCrmText': 'Web CRM for managing support requests, WhatsApp conversations, leads and meetings. It integrates a GPT-4o mini agent with RAG to answer service questions, qualify leads and assist with scheduling, with human handoff whenever context is insufficient.',
    'projects.qwenN8nTitle': 'WhatsApp AI agent — Qwen and n8n',
    'projects.qwenN8nText': 'Experimental lab using Qwen 3.6 Plus, n8n, Evolution API, MySQL and RAG to look up products and reply through WhatsApp. Explores agents, tools and prompt-injection testing; it is not intended for production.',
    'projects.chatbotTitle': 'AI-powered customer support chatbot',
    'projects.chatbotText': 'Full-stack support app with real-time chat, Gemini API integration, a product catalog in a database and Swagger documentation, with a clear architecture and Docker environment.',
    'projects.complaintsTitle': 'Complaint management platform',
    'projects.complaintsText': 'Academic solution built with ASP.NET Core MVC for reporting, tracking and managing complaints, with authentication, role-based access and SQL Server persistence via Entity Framework.',
    'projects.editorsTitle': 'Editors Connection',
    'projects.editorsText': 'Front-end platform that connects clients and video editors, with an institutional interface, presentation pages, sign-up and login, and smooth navigation between sections.',
    'projects.accountTitle': 'Account — Financial simulator',
    'projects.accountText': 'Command-line app that simulates banking operations such as account creation, deposits, withdrawals and balance checks, using local JSON storage.',
    'experience.title': 'Professional experience',
    'experience.current': 'Current',
    'experience.liderMeta': '3 roles, growing internally into the IT team',
    'experience.pucMeta': 'Academic mentoring',
    'experience.itPeriod': 'Mar 2026 — present',
    'experience.itTitle': 'IT Assistant',
    'experience.itText': 'Built web applications with PHP (MVC), HTML, CSS, JavaScript and Bootstrap, along with REST APIs and Node.js integrations. Delivered AI solutions including chatbots with RAG, embeddings and database integration for process automation.',
    'experience.planningPeriod': 'Oct 2024 — Feb 2026',
    'experience.planningTitle': 'Production planning and control assistant',
    'experience.planningText': 'Supported production planning and control through reports, data analysis, order monitoring and process improvement.',
    'experience.mentorPeriod': 'Aug 2025 — Dec 2025',
    'experience.mentorTitle': 'Front-End project mentor',
    'experience.mentorText': 'Academic mentoring in software engineering, logic, algorithms and web development. Guided hands-on work with Figma, HTML, CSS, JavaScript and Git.',
    'experience.traineePeriod': 'Aug 2026 — Sep 2024',
    'experience.traineeTitle': 'Administrative trainee',
    'experience.traineeText': 'Developed organization, communication and teamwork skills while supporting the company’s daily administrative routines.',
    'education.title': 'Education and continuous learning',
    'education.tabDegree': 'Degree',
    'education.tabTech': 'Certification',
    'education.tabLang': 'Languages',
    'education.tabCourses': 'Courses',
    'education.degreeTitle': 'Degree in Systems Analysis and Development',
    'education.degreeMeta': 'Pontifical Catholic University of Minas Gerais, 2025 to 2028',
    'education.degreeText': 'Academic training focused on software engineering, data structures and web development.',
    'education.techTitle': 'Technical qualification certificate',
    'education.techMeta': 'Pontifical Catholic University of Minas Gerais, 2025 to 2026',
    'education.techText': 'Solid foundation in programming logic, front-end, back-end, databases and networking.',
    'education.langTitle': 'English — Beginner level',
    'education.langMeta': 'KNN / Knowledge Now, since 2025',
    'education.langText': 'Improving English, able to read technical documentation and follow technology content.',
    'education.courseHtml': 'HTML5 and CSS3',
    'education.courseHtmlMeta': 'Curso em Vídeo, 2025',
    'education.courseAlgorithms': 'Algorithms and programming logic',
    'education.courseAlgorithmsMeta': 'Udemy, 2025',
    'education.courseFigma': 'PRO FIGMA | UI DESIGN with Figma from zero to expert',
    'education.courseFigmaMeta': 'Udemy, 2025',
    'education.courseGemini': 'Google Gemini AI immersion',
    'education.courseGeminiMeta': 'Alura, 2025',
    'education.courseGit': 'Git and GitHub from beginner to advanced',
    'education.courseGitMeta': 'Udemy, 2025',
    'education.courseWex': 'WEX - End to End Engineering',
    'education.courseWexMeta': 'DIO, 2025',
    'education.courseN8n': 'Santander 2025 - Automation with N8N',
    'education.courseN8nMeta': 'Udemy, 2025',
    'contact.cursor': 'you',
    'contact.title': 'Shall we build something meaningful together?',
    'contact.subtitle': 'Open to new projects, collaborations and opportunities.',
    'contact.text': 'Available for web development, automation and digital solutions that deliver real value.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Send message',
    'form.namePlaceholder': 'Your name',
    'form.emailPlaceholder': 'your@email.com',
    'form.messagePlaceholder': 'Tell me about your project...',
    'form.invalid': 'Add your name, a valid email and a message before sending.',
    'form.success': 'Your email app should open with the message ready. Thanks for reaching out!',
    'footer.about': 'About',
    'footer.tech': 'Technologies',
    'footer.projects': 'Projects',
    'footer.experience': 'Experience',
    'footer.education': 'Education',
    'footer.contact': 'Contact',
    'footer.top': 'Back to top',
    'footer.copyright': '© <span id="year"></span> Henrique Alves. All rights reserved.',
    'aria.themeDark': 'Switch to dark theme',
    'aria.themeLight': 'Switch to light theme',
    'aria.menuOpen': 'Open menu',
    'aria.menuClose': 'Close menu'
  }
};

const CONTACT_EMAIL = 'henriquefdalves15@email.com';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;
let lenis = null;

const lang = () => (root.getAttribute('data-lang') === 'en' ? 'en' : 'pt');
const t = (key) => translations[lang()][key] || translations.pt[key] || '';

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initTheme();
  initLanguageToggle();
  initHeaderScroll();
  initMobileNav();
  initActiveNavLink();
  initTitleReveal();
  initHero();
  initProjectHoverLabel();
  initContactCanvas();
  initTabs();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------
   UTILITÁRIOS
   -------------------------------------------------------------------- */
const easeInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/** Um único requestAnimationFrame para todas as animações contínuas. */
const ticker = (() => {
  const tasks = new Set();
  let rafId = null;

  function loop(now) {
    tasks.forEach((fn) => fn(now));
    rafId = tasks.size ? requestAnimationFrame(loop) : null;
  }

  return {
    add(fn) {
      tasks.add(fn);
      if (!rafId) rafId = requestAnimationFrame(loop);
    },
    remove(fn) {
      tasks.delete(fn);
    }
  };
})();

/** Chama onChange(true/false) quando o elemento entra/sai da tela. */
function watchVisibility(el, onChange, rootMargin = '0px') {
  if (!('IntersectionObserver' in window)) {
    onChange(true);
    return;
  }
  new IntersectionObserver((entries) => onChange(entries[0].isIntersecting), { rootMargin }).observe(el);
}

/* --------------------------------------------------------------------
   SCROLL SUAVE (Lenis) + ÂNCORAS
   -------------------------------------------------------------------- */
function initSmoothScroll() {
  if (!prefersReducedMotion && typeof window.Lenis === 'function') {
    lenis = new window.Lenis({ lerp: 0.12, smoothWheel: true, syncTouch: false });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    const target = hash.length > 1 ? document.querySelector(hash) : null;
    if (!target) return;

    e.preventDefault();
    scrollToTarget(target);
    history.replaceState(null, '', hash);

    // Move o foco para a seção para leitores de tela e teclado
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
}

function scrollToTarget(target) {
  const header = document.getElementById('header');
  const offset = target.id === 'home' || target.id === 'main' ? 0 : -(header.offsetHeight + 8);

  if (lenis) {
    lenis.scrollTo(target.id === 'home' ? 0 : target, { offset, duration: 1.2 });
  } else {
    const top = target.id === 'home' ? 0 : target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
}

/* --------------------------------------------------------------------
   TEMA CLARO / ESCURO
   -------------------------------------------------------------------- */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const STORAGE_KEY = 'portfolio-theme';

  const update = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', t(isDark ? 'aria.themeLight' : 'aria.themeDark'));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#141416' : '#ffffff');
  };

  update();
  document.addEventListener('portfolio:lang', update);

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'dark');
    try { localStorage.setItem(STORAGE_KEY, isDark ? 'light' : 'dark'); } catch (e) { /* sem storage */ }
    update();
  });
}

/* --------------------------------------------------------------------
   IDIOMA / TRADUÇÃO
   -------------------------------------------------------------------- */
function initLanguageToggle() {
  const toggle = document.getElementById('langToggle');
  const STORAGE_KEY = 'portfolio-language';
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* sem storage */ }

  applyLanguage(saved === 'en' ? 'en' : 'pt');

  toggle.addEventListener('click', () => {
    const next = lang() === 'en' ? 'pt' : 'en';
    applyLanguage(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* sem storage */ }
  });

  function applyLanguage(code) {
    const dict = translations[code];
    root.setAttribute('data-lang', code);
    root.setAttribute('lang', code === 'en' ? 'en' : 'pt-BR');
    toggle.textContent = code === 'en' ? 'PT' : 'EN';
    toggle.setAttribute('aria-label', code === 'en' ? 'Mudar para português' : 'Switch to English');

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dict.metaDescription);
    document.title = dict.title;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = dict[el.getAttribute('data-i18n')];
      if (!value) return;
      if (el.getAttribute('data-i18n-html') === 'true') el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const value = dict[el.getAttribute('data-i18n-attr')];
      if (value) el.setAttribute('placeholder', value);
    });

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    document.dispatchEvent(new CustomEvent('portfolio:lang', { detail: code }));
  }
}

/* --------------------------------------------------------------------
   HEADER — FUNDO AO ROLAR
   -------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------
   MENU MOBILE
   -------------------------------------------------------------------- */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  const setOpen = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', t(isOpen ? 'aria.menuClose' : 'aria.menuOpen'));
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (lenis) isOpen ? lenis.stop() : lenis.start();
  };

  navToggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('.nav__link').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      navToggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => {
    if (mq.matches) setOpen(false);
  });
}

/* --------------------------------------------------------------------
   LINK ATIVO NA NAV CONFORME A SEÇÃO VISÍVEL
   -------------------------------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      links.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------
   REVELAÇÃO DOS TÍTULOS DE SEÇÃO
   -------------------------------------------------------------------- */
function initTitleReveal() {
  const titles = document.querySelectorAll('.js-title');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    titles.forEach((el) => el.classList.add('is-in'));
    return;
  }

  // Observa o elemento pai: o Chrome não reporta interseção de alvos 100% recortados por clip-path
  const byParent = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      byParent.get(entry.target).classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  titles.forEach((el) => {
    byParent.set(el.parentElement, el);
    observer.observe(el.parentElement);
  });
}

/* ====================================================================
   HERO — CANVAS
   ==================================================================== */
function initHero() {
  const hero = document.getElementById('home');
  if (!hero) return;

  const state = { visible: true };
  watchVisibility(hero, (v) => { state.visible = v; });

  splitHeroTitle(hero);
  initSelection(hero);
  initHeroGrid(hero);
  initChatCard(hero);
  const cursors = initHeroCursors(hero, state);
  const floats = initFloatCards(hero, state);
  const typing = initCodeTyping(hero, state);

  // Intro orquestrada: espera as fontes para não "pular" o título
  const start = () => {
    if (root.classList.contains('is-ready')) return;
    root.classList.add('is-ready');
    setTimeout(() => hero.querySelector('.js-selection').classList.add('is-selected'), prefersReducedMotion ? 0 : 1050);
    cursors.start();
    floats.start();
    setTimeout(typing.start, prefersReducedMotion ? 0 : 1300);
  };

  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 900))]).then(start);
  } else {
    start();
  }
}

function splitHeroTitle(hero) {
  const word = hero.querySelector('.hero__word');
  const text = word.textContent;
  word.innerHTML = [...text]
    .map((ch, i) => `<span class="char" style="--i:${i}" aria-hidden="true">${ch}</span>`)
    .join('');
  // Mantém o texto legível para leitores de tela
  const sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = text;
  word.after(sr);
}

/** Caixa de seleção: dimensões ao vivo e arrastar (desktop). */
function initSelection(hero) {
  const selection = hero.querySelector('.js-selection');
  const size = hero.querySelector('.js-size');

  const updateSize = () => {
    const r = selection.getBoundingClientRect();
    size.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
  };
  updateSize();
  if ('ResizeObserver' in window) new ResizeObserver(updateSize).observe(selection);

  if (!hasFinePointer) return;
  selection.classList.add('is-draggable');

  let dx = 0;
  let dy = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  selection.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    dragging = true;
    startX = e.clientX - dx;
    startY = e.clientY - dy;
    selection.setPointerCapture(e.pointerId);
    selection.classList.add('is-dragging', 'is-selected');
    selection.style.transition = 'none';
  });

  selection.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const limitX = window.innerWidth * 0.3;
    const limitY = window.innerHeight * 0.25;
    dx = clamp(e.clientX - startX, -limitX, limitX);
    dy = clamp(e.clientY - startY, -limitY, limitY);
    selection.style.setProperty('--dx', `${dx}px`);
    selection.style.setProperty('--dy', `${dy}px`);
    size.textContent = `X ${Math.round(dx)}  Y ${Math.round(dy)}`;
  });

  const end = () => {
    if (!dragging) return;
    dragging = false;
    selection.classList.remove('is-dragging');
    updateSize();
  };
  selection.addEventListener('pointerup', end);
  selection.addEventListener('pointercancel', end);

  // Duplo clique devolve o título ao lugar
  selection.addEventListener('dblclick', () => {
    dx = 0;
    dy = 0;
    selection.style.transition = 'transform .7s cubic-bezier(.22,1,.36,1)';
    selection.style.setProperty('--dx', '0px');
    selection.style.setProperty('--dy', '0px');
  });
}

/** Grade de fundo que acende as células sob o mouse, deixando um rastro. */
function initHeroGrid(hero) {
  const grid = hero.querySelector('.js-grid');
  let cw = 64;
  let ch = 64;

  const measure = () => {
    const w = grid.offsetWidth;
    const h = grid.offsetHeight;
    if (!w || !h) return;
    const target = w < 640 ? 48 : 64;
    cw = w / Math.max(1, Math.round(w / target));
    ch = h / Math.max(1, Math.round(h / target));
    grid.style.setProperty('--cw', `${cw}px`);
    grid.style.setProperty('--ch', `${ch}px`);
  };
  measure();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 150);
  }, { passive: true });

  if (!hasFinePointer || prefersReducedMotion) return;

  const pool = Array.from({ length: 14 }, () => {
    const el = document.createElement('div');
    el.className = 'grid-lit';
    grid.appendChild(el);
    return el;
  });
  let next = 0;
  let lastCell = '';

  hero.addEventListener('pointermove', (e) => {
    const rect = grid.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / cw);
    const row = Math.floor((e.clientY - rect.top) / ch);
    const key = `${col}:${row}`;
    if (key === lastCell || col < 0 || row < 0) return;
    lastCell = key;

    const el = pool[next];
    next = (next + 1) % pool.length;
    el.style.transform = `translate(${col * cw}px, ${row * ch}px)`;
    el.classList.add('is-lit');
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('is-lit')));
  }, { passive: true });
}

/** Cursores "multiplayer": entram escalonados e passeiam pelo canvas. */
function initHeroCursors(hero, state) {
  const els = [...hero.querySelectorAll('.js-mcursor')];
  // Movimento menor em telas estreitas para não cobrir o texto
  const k = window.innerWidth < 760 ? 0.35 : 1;

  const cursors = els.map((el) => {
    const [fx, fy] = (el.dataset.from || '0,0').split(',').map(Number);
    const path = (el.dataset.path || '0,0').split(' ').map((p) => p.split(',').map((n) => Number(n) * k));
    return {
      el,
      delay: Number(el.dataset.delay) || 0,
      from: { x: fx, y: fy },
      path,
      x: fx,
      y: fy,
      seg: 0,
      phase: 'wait',
      t0: 0,
      dur: 0,
      a: null,
      b: null
    };
  });

  const place = (c) => {
    c.el.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0)`;
  };

  const click = (c) => {
    c.el.classList.add('is-click');
    setTimeout(() => c.el.classList.remove('is-click'), 160);
  };

  function nextSegment(c, now) {
    const a = c.path[c.seg];
    c.seg = (c.seg + 1) % c.path.length;
    const b = c.path[c.seg];
    c.a = { x: a[0], y: a[1] };
    c.b = { x: b[0], y: b[1] };
    c.phase = 'move';
    c.t0 = now + rand(350, 1300);
    c.dur = rand(1900, 3000);
  }

  function tick(now) {
    if (!state.visible) return;
    cursors.forEach((c) => {
      if (c.phase === 'wait') return;
      if (c.phase === 'enter') {
        const p = clamp((now - c.t0) / c.dur, 0, 1);
        const e = easeOutCubic(p);
        c.x = c.from.x * (1 - e);
        c.y = c.from.y * (1 - e);
        place(c);
        if (p >= 1) {
          click(c);
          nextSegment(c, now);
        }
        return;
      }
      if (now < c.t0) return;
      const p = clamp((now - c.t0) / c.dur, 0, 1);
      const e = easeInOutSine(p);
      c.x = c.a.x + (c.b.x - c.a.x) * e;
      c.y = c.a.y + (c.b.y - c.a.y) * e;
      place(c);
      if (p >= 1) {
        if (Math.random() < 0.45) click(c);
        nextSegment(c, now);
      }
    });
  }

  return {
    start() {
      if (prefersReducedMotion) {
        cursors.forEach((c) => {
          c.x = 0;
          c.y = 0;
          place(c);
          c.el.classList.add('is-visible');
        });
        return;
      }
      cursors.forEach((c) => {
        place(c);
        setTimeout(() => {
          c.el.classList.add('is-visible');
          c.phase = 'enter';
          c.t0 = performance.now();
          c.dur = 1500;
        }, 600 + c.delay);
      });
      ticker.add(tick);
    }
  };
}

/** Cartões flutuantes: flutuação lenta + parallax ao rolar. */
function initFloatCards(hero, state) {
  const cards = [...hero.querySelectorAll('.js-float')].map((el, i) => ({
    el,
    depth: Number(el.dataset.depth) || 0.3,
    phase: i * 1.7
  }));

  function tick(now) {
    if (!state.visible) return;
    const scroll = window.scrollY;
    cards.forEach((c) => {
      const float = Math.sin(now / 1400 + c.phase) * 6;
      const y = float - scroll * c.depth * 0.45;
      c.el.style.setProperty('--fy', `${y.toFixed(1)}px`);
    });
  }

  return {
    start() {
      if (!prefersReducedMotion && cards.length) ticker.add(tick);
    }
  };
}

/** Cartão de código que se digita sozinho. */
function initCodeTyping(hero, state) {
  const target = hero.querySelector('.js-typing');
  if (!target) return { start() { } };

  // Cada linha é uma lista de [texto, classe]
  const code = {
    pt: [
      [['const ', 'tk-k'], ['henrique', ''], [' = {', '']],
      [['  local', 'tk-p'], [': ', ''], ["'Minas Gerais, BR'", 'tk-s'], [',', '']],
      [['  stack', 'tk-p'], [': [', ''], ["'Node'", 'tk-s'], [', ', ''], ["'Java'", 'tk-s'], [', ', ''], ["'React'", 'tk-s'], ['],', '']],
      [['  foco', 'tk-p'], [': ', ''], ["'back-end + IA'", 'tk-s'], [',', '']],
      [['  disponivel', 'tk-p'], [': ', ''], ['true', 'tk-k'], [',', '']],
      [['};', '']]
    ],
    en: [
      [['const ', 'tk-k'], ['henrique', ''], [' = {', '']],
      [['  location', 'tk-p'], [': ', ''], ["'Minas Gerais, BR'", 'tk-s'], [',', '']],
      [['  stack', 'tk-p'], [': [', ''], ["'Node'", 'tk-s'], [', ', ''], ["'Java'", 'tk-s'], [', ', ''], ["'React'", 'tk-s'], ['],', '']],
      [['  focus', 'tk-p'], [': ', ''], ["'back-end + AI'", 'tk-s'], [',', '']],
      [['  available', 'tk-p'], [': ', ''], ['true', 'tk-k'], [',', '']],
      [['};', '']]
    ]
  };

  const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

  // Transforma em tokens lineares (com quebras de linha) para digitar
  const flatten = (lines) => {
    const tokens = [];
    lines.forEach((line, i) => {
      line.forEach((tok) => tokens.push(tok));
      if (i < lines.length - 1) tokens.push(['\n', '']);
    });
    return tokens;
  };

  const render = (tokens, count) => {
    let left = count;
    let html = '';
    for (const [text, cls] of tokens) {
      if (left <= 0) break;
      const part = escape(text.slice(0, left));
      left -= text.length;
      html += cls ? `<span class="${cls}">${part}</span>` : part;
    }
    target.innerHTML = html;
  };

  const total = (tokens) => tokens.reduce((n, [text]) => n + text.length, 0);

  let tokens = flatten(code[lang()]);
  let count = 0;
  let mode = 'type';
  let nextAt = 0;

  document.addEventListener('portfolio:lang', () => {
    tokens = flatten(code[lang()]);
    if (prefersReducedMotion) render(tokens, Infinity);
    else count = Math.min(count, total(tokens));
  });

  function tick(now) {
    if (!state.visible || now < nextAt) return;
    if (mode === 'type') {
      count += 1;
      render(tokens, count);
      const ch = flatTextAt(tokens, count - 1);
      nextAt = now + (ch === '\n' ? 220 : rand(28, 70));
      if (count >= total(tokens)) {
        mode = 'hold';
        nextAt = now + 5200;
      }
    } else if (mode === 'hold') {
      mode = 'erase';
    } else {
      count = Math.max(0, count - 4);
      render(tokens, count);
      nextAt = now + 16;
      if (count === 0) {
        mode = 'type';
        nextAt = now + 600;
      }
    }
  }

  function flatTextAt(toks, index) {
    let i = index;
    for (const [text] of toks) {
      if (i < text.length) return text[i];
      i -= text.length;
    }
    return '';
  }

  return {
    start() {
      if (prefersReducedMotion) {
        render(tokens, Infinity);
        return;
      }
      ticker.add(tick);
    }
  };
}

/** O balão do al.ai no hero abre o widget de chat. */
function initChatCard(hero) {
  const btn = hero.querySelector('.js-open-chat');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const launcher = document.querySelector('[data-chat-toggle]');
    if (launcher) {
      const panel = document.getElementById('portfolio-chat-panel');
      if (!panel || panel.hidden) launcher.click();
      const input = document.querySelector('[data-chat-form] input, [data-chat-form] textarea');
      if (input) setTimeout(() => input.focus(), 250);
    } else {
      scrollToTarget(document.getElementById('contato'));
    }
  });
}

/* --------------------------------------------------------------------
   PROJETOS — CURSOR-ETIQUETA QUE SEGUE O MOUSE
   -------------------------------------------------------------------- */
function initProjectHoverLabel() {
  const label = document.querySelector('.hover-label');
  const text = document.querySelector('.js-hover-label-text');
  if (!label || !hasFinePointer) return;

  const move = (e) => {
    label.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  };

  document.querySelectorAll('.js-hover-label').forEach((media) => {
    media.addEventListener('pointerenter', (e) => {
      text.textContent = t(media.dataset.labelKey);
      move(e);
      label.classList.add('is-visible');
    });
    media.addEventListener('pointermove', move, { passive: true });
    media.addEventListener('pointerleave', () => label.classList.remove('is-visible'));
  });

  // Esconde ao rolar com a roda sem mover o mouse
  window.addEventListener('scroll', () => label.classList.remove('is-visible'), { passive: true });
}

/* --------------------------------------------------------------------
   CONTATO — PONTOS COM HALO + CURSOR "VOCÊ"
   -------------------------------------------------------------------- */
function initContactCanvas() {
  const section = document.getElementById('contato');
  const dots = section && section.querySelector('.js-dots');
  const cursor = section && section.querySelector('.js-contact-cursor');
  if (!section || !dots) return;

  if (hasFinePointer && !prefersReducedMotion) {
    let queued = false;
    let px = 0;
    let py = 0;
    section.addEventListener('pointermove', (e) => {
      const r = section.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
      dots.classList.add('is-active');
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        dots.style.setProperty('--mx', `${px}px`);
        dots.style.setProperty('--my', `${py}px`);
        dots.style.setProperty('--lx', `${px}px`);
        dots.style.setProperty('--ly', `${py}px`);
      });
    }, { passive: true });
    section.addEventListener('pointerleave', () => {
      dots.classList.remove('is-active');
      dots.style.removeProperty('--mx');
      dots.style.removeProperty('--my');
    });
  }

  if (!cursor || window.innerWidth < 1024) return;

  // Pontos do percurso em frações da seção (área do título e coluna esquerda)
  const waypoints = [
    { x: 0.62, y: 0.1, click: false },
    { x: 0.82, y: 0.2, click: true },
    { x: 0.55, y: 0.3, click: false },
    { x: 0.3, y: 0.58, click: true },
    { x: 0.08, y: 0.42, click: false },
    { x: 0.42, y: 0.72, click: true },
    { x: 0.7, y: 0.06, click: false }
  ];

  const state = { visible: false, started: false };
  let i = 0;
  let from = { x: 0, y: 0 };
  let to = { x: 0, y: 0 };
  let t0 = 0;
  let dur = 1200;
  let wait = 0;

  const pos = (wp) => ({ x: wp.x * section.offsetWidth, y: wp.y * section.offsetHeight });

  const place = (p) => {
    cursor.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
  };

  function tick(now) {
    if (!state.visible || now < wait) return;
    const p = clamp((now - t0) / dur, 0, 1);
    const e = easeInOutSine(p);
    place({ x: from.x + (to.x - from.x) * e, y: from.y + (to.y - from.y) * e });
    if (p < 1) return;

    if (waypoints[i].click) {
      cursor.classList.add('is-click');
      setTimeout(() => cursor.classList.remove('is-click'), 160);
    }
    from = to;
    i = (i + 1) % waypoints.length;
    to = pos(waypoints[i]);
    wait = now + rand(400, 900);
    t0 = wait;
    dur = rand(1400, 2200);
  }

  watchVisibility(section, (v) => {
    state.visible = v;
    if (!v || state.started) return;
    state.started = true;
    from = pos(waypoints[waypoints.length - 1]);
    to = pos(waypoints[0]);
    place(from);
    cursor.classList.add('is-visible');
    if (prefersReducedMotion) return;
    t0 = performance.now() + 400;
    wait = t0;
    ticker.add(tick);
  });
}

/* --------------------------------------------------------------------
   TABS — SEÇÃO FORMAÇÃO (com navegação por setas)
   -------------------------------------------------------------------- */
function initTabs() {
  const buttons = [...document.querySelectorAll('.tab-btn')];
  const panels = document.querySelectorAll('.tab-panel');

  const activate = (btn, focus) => {
    buttons.forEach((b) => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', String(active));
      b.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const isTarget = panel.id === `tab-${btn.dataset.tab}`;
      panel.classList.toggle('is-active', isTarget);
      panel.hidden = !isTarget;
    });
    if (focus) btn.focus();
  };

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => activate(btn, false));
    btn.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = buttons[(index + 1) % buttons.length];
      if (e.key === 'ArrowLeft') next = buttons[(index - 1 + buttons.length) % buttons.length];
      if (e.key === 'Home') next = buttons[0];
      if (e.key === 'End') next = buttons[buttons.length - 1];
      if (next) {
        e.preventDefault();
        activate(next, true);
      }
    });
  });
}

/* --------------------------------------------------------------------
   FORMULÁRIO DE CONTATO (validação e feedback no cliente)
   -------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const fields = [...form.querySelectorAll('input, textarea')];

  fields.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.checkValidity()) field.removeAttribute('aria-invalid');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const invalid = fields.filter((field) => !field.value.trim() || !field.checkValidity());
    fields.forEach((field) => {
      if (invalid.includes(field)) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    });

    if (invalid.length) {
      feedback.textContent = t('form.invalid');
      feedback.className = 'form-feedback is-error';
      invalid[0].focus();
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    feedback.textContent = t('form.success');
    feedback.className = 'form-feedback is-success';
    form.reset();
  });
}

/* --------------------------------------------------------------------
   BOTÃO VOLTAR AO TOPO
   -------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  btn.addEventListener('click', () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    const home = document.getElementById('home');
    if (!home.hasAttribute('tabindex')) home.setAttribute('tabindex', '-1');
    home.focus({ preventScroll: true });
  });
}

})();
