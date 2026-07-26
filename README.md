# Portfólio de Henrique Alves

Este é um portfólio pessoal estático desenvolvido para apresentação profissional no GitHub. O site apresenta experiência, projetos, tecnologias e formas de contato com um design responsivo, navegação móvel e alternância de idioma.

## Visão geral

O portfólio foi construído como um site estático com foco em:
- design limpo e moderno
- layout responsivo para desktop e mobile
- alternância entre português e inglês
- animações sutis de entrada ao rolar a página
- navegação acessível, incluindo `aria-labels`
- seções de destaque:
  - Hero
  - Sobre
  - Tecnologias
  - Projetos
  - Experiência
  - Formação
  - Contato

## Estrutura do projeto

```
portifolio/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── image/
│   │   ├── avatar.png
│   │   ├── foto.jpeg
│   │   └── ...
│   └── js/
│       └── app.js
├── favicon.png
├── index.html
└── README.md
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Font Awesome
- Google Fonts

## Funcionalidades

### Idioma
O arquivo `assets/js/app.js` gerencia a tradução de conteúdo entre português e inglês usando a configuração presente no elemento `data-i18n`.

### Tema
O portfólio possui alternância de tema claro/escuro, com preferência salva no `localStorage`.

### Navegação mobile
O menu de navegação funciona em dispositivos menores, com um botão de menu que abre e fecha a navegação e bloqueia o scroll de fundo quando ativo.

### Projetos e experiência
A seção de projetos traz cards com descrições, links para repositórios e visualização ao vivo. A seção de experiência apresenta uma linha do tempo com cargos e responsabilidades.

### Contato
O formulário de contato é estático e usa um link `mailto:` para abrir o cliente de e-mail do visitante.

## Links externos

Os links externos para GitHub, LinkedIn e Instagram abrem em nova aba.

## Como executar localmente

### Opção 1: Abrir direto no navegador
1. Navegue até a pasta `portifolio`
2. Abra `index.html` no seu navegador

### Opção 2: Usar um servidor local simples
Se preferir um servidor local, use uma ferramenta como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code ou um servidor simples de terminal.

Exemplo com Python (se instalado):

```bash
cd path/to/portifolio
python -m http.server 8000
```

Em seguida, acesse `http://localhost:8000`.

## Observações

- O site é estático e não requer backend.
- O idioma inicial está definido como português, com a opção de alternar para inglês.
- Links internos não abrem em nova aba; apenas links externos de redes sociais e GitHub.

## Como contribuir

1. Faça um fork do repositório
2. Crie uma branch com a sua melhoria
3. Abra um pull request descrevendo as alterações
