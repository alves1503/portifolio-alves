/* ==========================================================================
   PORTFÓLIO — SCRIPT PRINCIPAL
   Organizado por funcionalidade para facilitar manutenção.
   ========================================================================== */
const translations = {
  pt: {
    title: 'Henrique Alves — Desenvolvedor Full-Stack',
    metaDescription: 'Portfólio profissional de Henrique Alves — desenvolvimento web, arquitetura de software e experiências digitais.',
    'nav.about': 'Sobre',
    'nav.tech': 'Tecnologias',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'hero.eyebrow': 'Olá, sou Henrique Alves',
    'hero.title': 'Desenvolvedor<br>Full-Stack<br>',
    'hero.subtitle': 'Desenvolvedor Full-Stack focado em entregar soluções web escaláveis, integrações de sistemas e automações com atenção a performance, usabilidade e arquitetura sustentável.',
    'hero.ctaPrimary': 'Ver projetos',
    'hero.ctaSecondary': 'Vamos conversar',
    'hero.scrollCue': 'Role',
    'about.title': 'Sobre mim',
    'about.text': 'Sou desenvolvedor Full-Stack com experiência em construir produtos digitais, APIs e automações que resolvem desafios reais com eficiência e escalabilidade. Entrego código limpo, arquitetura robusta e interfaces intuitivas, sempre buscando resultados mensuráveis para usuários e negócios. Tenho atuação em Back-end, integração de sistemas, automação e inteligência artificial, utilizando Node.js, React, PHP, Python, MySQL, Docker e n8n em projetos de alto padrão. Busco evolução contínua e uma visão estratégica alinhada a tecnologia, produto e entrega.',
    'about.quote': 'Bom design é pensamento claro tornado visível — e bom código é esse pensamento em funcionamento.',
    'about.signature': 'Henrique Alves',
    'tech.title': 'Tecnologias',
    'tech.subtitle': 'Ecossistema tecnológico estratégico para construir aplicações modernas e seguras.',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.cloud': 'Cloud & Ferramentas',
    'projects.title': 'Projetos selecionados',
    'projects.subtitle': 'Casos reais que demonstram minha capacidade em desenvolvimento web, back-end e experiência do usuário.',
    'projects.chatbotTitle': 'Chatbot inteligente para atendimento',
    'projects.chatbotText': 'Aplicação full-stack de atendimento automatizado com chat em tempo real, integração Gemini API, catálogo de produtos em banco de dados e documentação Swagger. Desenvolvida como solução completa para suporte ao cliente, com arquitetura clara e ambiente Docker.',
    'projects.complaintsTitle': 'Plataforma de gestão de denúncias',
    'projects.complaintsText': 'Solução acadêmica em ASP.NET Core MVC para registro, acompanhamento e gestão de denúncias, com autenticação, controle por perfil e persistência em SQL Server via Entity Framework.',
    'projects.editorsTitle': 'Conexão Editores',
    'projects.editorsText': 'Plataforma front-end para conectar clientes e editores de vídeo, com interface institucional, páginas de apresentação, cadastro e login, e navegação fluida entre seções.',
    'projects.accountTitle': 'Account — Simulador financeiro',
    'projects.accountText': 'Aplicação de terminal para simular operações bancárias como criação de conta, depósitos, saques e consultas de saldo, com armazenamento local em JSON.',
    'experience.title': 'Experiência profissional',
    'experience.itTitle': 'Assistente de TI',
    'experience.itText': 'Desenvolvimento de aplicações web com PHP (MVC), HTML, CSS, JavaScript e Bootstrap, além de APIs REST e integrações Node.js. Implantação de soluções de IA, incluindo chatbots com RAG, embeddings e integração a bancos de dados para automação de processos.',
    'experience.planningTitle': 'Assistente de planejamento e controle de produção',
    'experience.planningText': 'Apoio ao planejamento e controle de produção com relatórios, análise de dados, monitoramento de ordens e suporte à otimização de processos.',
    'experience.mentorTitle': 'Monitor de projeto Front-End',
    'experience.mentorText': 'Mentoria acadêmica em engenharia de software, lógica, algoritmos e desenvolvimento web. Atuei em orientações práticas com Figma, HTML, CSS, JavaScript e Git.',
    'experience.traineeTitle': 'Aprendiz administrativo',
    'experience.traineeText': 'Atuação como aprendiz administrativo, desenvolvendo organização, comunicação, trabalho em equipe e apoio às rotinas administrativas da empresa.',
    'education.title': 'Formação & aprendizado contínuo',
    'education.tabDegree': 'Graduação',
    'education.tabTech': 'Certificação técnica',
    'education.tabLang': 'Idiomas',
    'education.tabCourses': 'Cursos',
    'education.degreeTitle': 'Graduação em Análise e Desenvolvimento de Sistemas',
    'education.degreeMeta': 'Pontifícia Universidade Católica de Minas Gerais · 2025 — 2028',
    'education.degreeText': 'Formação voltada a engenharia de software, estruturas de dados e desenvolvimento web.',
    'education.techTitle': 'Formação técnica em qualificação profissional',
    'education.techMeta': 'Pontifícia Universidade Católica de Minas Gerais · 2025 — 2026',
    'education.techText': 'Fundamentos sólidos em lógica de programação, Front-End, Back-End, banco de dados e redes.',
    'education.langTitle': 'Inglês — Nível básico',
    'education.langMeta': 'KNN / Knowledge Now · Início em 2025',
    'education.langText': 'Inglês em desenvolvimento, com capacidade para leitura de documentação técnica e compreensão de conteúdos de tecnologia.',
    'education.courseHtml': 'HTML5 e CSS3',
    'education.courseHtmlMeta': 'Plataforma Curso em Vídeo · 2025',
    'education.courseAlgorithms': 'Algoritmos e lógica de programação',
    'education.courseAlgorithmsMeta': 'Plataforma Udemy · 2025',
    'education.courseFigma': 'PRO FIGMA | UI DESIGN com Figma do zero ao especialista',
    'education.courseFigmaMeta': 'Plataforma Udemy · 2025',
    'education.courseGemini': 'Imersão IA Google Gemini',
    'education.courseGeminiMeta': 'Plataforma Alura · 2025',
    'education.courseGit': 'Git e GitHub do básico ao avançado',
    'education.courseGitMeta': 'Plataforma Udemy · 2025',
    'education.courseWex': 'WEX - End to End Engineering',
    'education.courseWexMeta': 'Plataforma DIO · 2025',
    'education.courseN8n': 'Santander 2025 - Automação com N8N',
    'education.courseN8nMeta': 'Plataforma Udemy · 2025',
    'contact.title': 'Vamos construir algo relevante juntos?',
    'contact.subtitle': 'Aberto a novos projetos, parcerias e oportunidades.',
    'contact.eyebrow': 'Disponibilidade',
    'contact.heading': 'Vamos conversar sobre seu próximo projeto',
    'contact.text': 'Disponível para projetos em desenvolvimento web, automação e soluções digitais que geram valor real.',
    'form.name': 'Nome',
    'form.email': 'E-mail',
    'form.message': 'Mensagem',
    'form.submit': 'Enviar mensagem',
    'form.namePlaceholder': 'Seu nome',
    'form.emailPlaceholder': 'seu@email.com',
    'form.messagePlaceholder': 'Conte um pouco sobre seu projeto...',
    'form.invalid': 'Preencha todos os campos corretamente antes de enviar.',
    'form.success': 'Seu cliente de e-mail será aberto com a mensagem pronta. Obrigado pelo contato!',
    'form.successTitle': 'Mensagem enviada',
    'footer.about': 'Sobre',
    'footer.tech': 'Tecnologias',
    'footer.projects': 'Projetos',
    'footer.experience': 'Experiência',
    'footer.education': 'Formação',
    'footer.contact': 'Contato',
    'footer.copyright': '© <span id="year"></span> Henrique Alves. Todos os direitos reservados.'
  },
  en: {
    title: 'Henrique Alves — Full-Stack Developer',
    metaDescription: 'Professional portfolio of Henrique Alves — web development, software architecture and digital experiences.',
    'nav.about': 'About',
    'nav.tech': 'Technologies',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Hello, I am Henrique Alves',
    'hero.title': 'Full-Stack<br>Developer<br>',
    'hero.subtitle': 'Full-Stack developer focused on delivering scalable web solutions, system integrations and automations with strong emphasis on performance, usability and clean architecture.',
    'hero.ctaPrimary': 'See my work',
    'hero.ctaSecondary': 'Let’s talk',
    'hero.scrollCue': 'SCROLL',
    'about.title': 'About me',
    'about.text': 'I am a Full-Stack developer with experience in building digital products, APIs and automations that solve complex problems with efficiency and scalability. I deliver clean code, robust architecture and intuitive interfaces, always aiming for measurable impact for users and businesses. I work across backend, systems integration, automation and AI, using Node.js, React, PHP, Python, MySQL, Docker and n8n in high-quality projects. I am constantly evolving my technical skills and refining a strategic view of technology, product and delivery.',
    'about.quote': 'Good design is clear thinking made visible — and good code is that thinking in action.',
    'about.signature': 'Henrique Alves',
    'tech.title': 'Technologies',
    'tech.subtitle': 'Strategic technology stack for building modern and reliable applications.',
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.cloud': 'Cloud & Tools',
    'projects.title': 'Selected projects',
    'projects.subtitle': 'Product examples that showcase my expertise in web development, backend and user experience.',
    'projects.chatbotTitle': 'AI-powered customer support chatbot',
    'projects.chatbotText': 'Full-stack support platform with real-time chat, Gemini API integration, product catalog in database and Swagger API documentation. Built as a complete customer experience solution with structured architecture and Docker-based deployment.',
    'projects.complaintsTitle': 'Complaint management platform',
    'projects.complaintsText': 'Academic web solution built with ASP.NET Core MVC for reporting, tracking and managing complaints, with authentication, role-based access and SQL Server persistence via Entity Framework.',
    'projects.editorsTitle': 'Editors Connection',
    'projects.editorsText': 'Front-end platform that connects clients and video editors, featuring a professional interface, presentation pages, user registration and seamless navigation.',
    'projects.accountTitle': 'Account — Financial simulator',
    'projects.accountText': 'Command-line application simulating banking operations such as account creation, deposits, withdrawals and balance checks, using local JSON persistence.',
    'experience.title': 'Professional experience',
    'experience.itTitle': 'IT Assistant',
    'experience.itText': 'Developed web applications using PHP (MVC), HTML, CSS, JavaScript and Bootstrap, along with REST APIs and Node.js integrations. Delivered AI-driven solutions including chatbots with RAG, embeddings and database automation.',
    'experience.planningTitle': 'Production planning and control assistant',
    'experience.planningText': 'Supported production planning and control through report creation, data analysis, order monitoring and process improvement initiatives.',
    'experience.mentorTitle': 'Front-End project mentor',
    'experience.mentorText': 'Served as an academic mentor guiding classmates in software engineering fundamentals, logic, algorithms and front-end development. Supported practical work in Figma, HTML, CSS, JavaScript and Git.',
    'experience.traineeTitle': 'Administrative trainee',
    'experience.traineeText': 'Gained experience in organization, communication, teamwork and support for day-to-day administrative operations.',
    'education.title': 'Education & continuous learning',
    'education.tabDegree': 'Degree',
    'education.tabTech': 'Certification',
    'education.tabLang': 'Languages',
    'education.tabCourses': 'Courses',
    'education.degreeTitle': 'Bachelor’s degree in Systems Analysis and Development',
    'education.degreeMeta': 'Pontifical Catholic University of Minas Gerais · 2025 — 2028',
    'education.degreeText': 'Academic training focused on software engineering, data structures and web development.',
    'education.techTitle': 'Technical qualification certificate',
    'education.techMeta': 'Pontifical Catholic University of Minas Gerais · 2025 — 2026',
    'education.techText': 'Solid foundation in programming logic, frontend, backend, databases and networking.',
    'education.langTitle': 'English — Beginner level',
    'education.langMeta': 'KNN / Knowledge Now · Started in 2025',
    'education.langText': 'Basic English proficiency, continuously improving with the ability to read technical documentation and follow technology content.',
    'education.courseHtml': 'HTML5 and CSS3',
    'education.courseHtmlMeta': 'Curso em Vídeo platform · 2025',
    'education.courseAlgorithms': 'Algorithms and programming logic',
    'education.courseAlgorithmsMeta': 'Udemy platform · 2025',
    'education.courseFigma': 'PRO FIGMA | UI DESIGN with Figma from zero to expert',
    'education.courseFigmaMeta': 'Udemy platform · 2025',
    'education.courseGemini': 'Google Gemini AI immersion',
    'education.courseGeminiMeta': 'Alura platform · 2025',
    'education.courseGit': 'Git and GitHub from beginner to advanced',
    'education.courseGitMeta': 'Udemy platform · 2025',
    'education.courseWex': 'WEX - End to End Engineering',
    'education.courseWexMeta': 'DIO platform · 2025',
    'education.courseN8n': 'Santander 2025 - Automation with N8N',
    'education.courseN8nMeta': 'Udemy platform · 2025',
    'contact.title': 'Let’s create something meaningful together?',
    'contact.subtitle': 'Open for new projects, collaborations and opportunities.',
    'contact.eyebrow': 'Availability',
    'contact.heading': 'Let’s discuss your next project',
    'contact.text': 'I am available for web development, automation and digital solutions that deliver real business value.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Send message',
    'form.namePlaceholder': 'Your name',
    'form.emailPlaceholder': 'your@email.com',
    'form.messagePlaceholder': 'Tell me about your project...',
    'form.invalid': 'Please complete all fields correctly before submitting.',
    'form.success': 'Your email client should open with the message ready. Thanks for reaching out!',
    'form.successTitle': 'Message sent',
    'footer.about': 'About',
    'footer.tech': 'Technologies',
    'footer.projects': 'Projects',
    'footer.experience': 'Experience',
    'footer.education': 'Education',
    'footer.contact': 'Contact',
    'footer.copyright': '© <span id="year"></span> Henrique Alves. All rights reserved.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initMobileNav();
  initActiveNavLink();
  initScrollReveal();
  initCounters();
  initTabs();
  initLanguageToggle();
  initContactForm();
  initBackToTop();
  initCursorGlow();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* --------------------------------------------------------------------
   1. TEMA CLARO / ESCURO
   -------------------------------------------------------------------- */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');

  applyTheme(initial);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed', 'false');
    }
  }
}

/* --------------------------------------------------------------------
   2. IDIOMA / TRADUÇÃO
   -------------------------------------------------------------------- */
function initLanguageToggle() {
  const toggle = document.getElementById('langToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-language';
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved || 'pt';

  applyLanguage(initial);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
    const next = current === 'en' ? 'pt' : 'en';
    applyLanguage(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function applyLanguage(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    toggle.textContent = lang === 'en' ? 'PT' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', translations[lang].metaDescription);
    }

    document.title = translations[lang].title;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const value = translations[lang][key];
      if (!value) return;

      if (element.getAttribute('data-i18n-html') === 'true') {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const key = element.getAttribute('data-i18n-attr');
      const value = translations[lang][key];
      if (value) {
        element.setAttribute('placeholder', value);
      }
    });
  }
}

/* --------------------------------------------------------------------
   3. HEADER — FUNDO AO ROLAR
   -------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --------------------------------------------------------------------
   4. MENU MOBILE
   -------------------------------------------------------------------- */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------
   5. LINK ATIVO NA NAV CONFORME A SEÇÃO VISÍVEL
   -------------------------------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------
   6. REVEAL AO ROLAR (IntersectionObserver)
   -------------------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

/* --------------------------------------------------------------------
   7. CONTADORES ANIMADOS (seção Sobre)
   -------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}

/* --------------------------------------------------------------------
   8. TABS — SEÇÃO FORMAÇÃO
   -------------------------------------------------------------------- */
function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });

      panels.forEach(panel => {
        const isTarget = panel.id === `tab-${target}`;
        panel.classList.toggle('is-active', isTarget);
        panel.hidden = !isTarget;
      });
    });
  });
}

/* --------------------------------------------------------------------
   9. FORMULÁRIO DE CONTATO (validação e feedback no cliente)
   -------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = document.documentElement.getAttribute('data-lang') === 'en'
        ? 'Please fill in all fields correctly before submitting.'
        : 'Preencha todos os campos corretamente antes de enviar.';
      feedback.style.color = 'var(--accent)';
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:henriquefdalves15@email.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    feedback.textContent = document.documentElement.getAttribute('data-lang') === 'en'
      ? 'Your email app should open with the message ready. Thanks for reaching out!'
      : 'Seu aplicativo de e-mail deve abrir com a mensagem pronta. Obrigado pelo contato!';
    feedback.style.color = 'var(--accent-2)';
    form.reset();
  });
}

/* --------------------------------------------------------------------
   10. BOTÃO VOLTAR AO TOPO
   -------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------
   11. GLOW DECORATIVO QUE SEGUE O CURSOR (apenas desktop)
   -------------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  window.addEventListener('mousemove', (e) => {
    glow.classList.add('is-active');
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));
}