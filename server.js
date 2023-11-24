/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const hostname = 'localhost';
const port = 3000;

const app = next({
    dev: process.env.NODE_ENV !== 'production',
    hostname,
    port,
});
const handle = app.getRequestHandler();
const { json } = express;

// Import API Modules
// const API_NAME = require('./path/to/api/folder');

app.prepare().then(() => {
    const server = express();

    server.use(json({ limit: '10MB' }));

    server.get('*', (req, res) => handle(req, res));

    // Define the API routes here
    // server.post('/routes/to/api', API_NAME);

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});
