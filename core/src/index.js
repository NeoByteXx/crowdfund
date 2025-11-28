import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createServer } from 'node:http';

const PORT = process.env.PORT || 4000;
const app = new Hono();

app.use('*', cors({ origin: '*' }));

app.get('/health', c => c.json({ 
  status: 'ok',
  service: 'crowdfund-core',
  timestamp: Date.now()
}));

app.get('/api/campaigns', c => c.json({ campaigns: [] }));
app.get('/api/donations', c => c.json({ donations: [] }));

const server = createServer(app.fetch);
server.listen(PORT, () => {
  console.log(`💰 CrowdFund Core API on http://localhost:${PORT}`);
});

