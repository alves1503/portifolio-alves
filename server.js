require('dotenv').config();

const path = require('node:path');
const express = require('express');
const chatRoutes = require('./src/routes/chatRoutes');
const widgetController = require('./src/controllers/widgetController');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '12kb', type: 'application/json' }));
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.use('/assets', express.static(path.join(__dirname, 'assets'), { dotfiles: 'deny' }));
app.get('/favicon.png', (req, res) => res.sendFile(path.join(__dirname, 'favicon.png')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api/widget', widgetController.render);
app.use('/api/chat', chatRoutes);
app.use((req, res) => res.status(404).json({ error: 'Recurso não encontrado.' }));

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfólio disponível em http://localhost:${port}`);
});