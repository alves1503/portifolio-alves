const fs = require('node:fs');
const path = require('node:path');
const Handlebars = require('handlebars');

const templatePath = path.join(__dirname, '..', '..', 'views', 'chat-widget.hbs');
const renderTemplate = Handlebars.compile(fs.readFileSync(templatePath, 'utf8'));

function render(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(renderTemplate({ name: 'Henrique Alves' }));
}

module.exports = { render };