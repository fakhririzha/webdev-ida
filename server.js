/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const MongoDBConnection = require('./core/lib/db');

MongoDBConnection();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const app = next({
    dev: process.env.NODE_ENV !== 'production',
    hostname,
    port,
});
const handle = app.getRequestHandler();
const { json, urlencoded } = express;

// Import API Modules
const POST_ACTIVITY = require('./api/activity/post');
const PUT_ACTIVITY = require('./api/activity/put');
const DELETE_ACTIVITY = require('./api/activity/delete');

app.prepare().then(() => {
    const server = express();

    server.use(json({ limit: '10MB' }));
    server.use(urlencoded({ extended: false }));

    server.get('*', (req, res) => handle(req, res));

    // Define the API routes for activity
    server.post('/api/activity', POST_ACTIVITY);
    server.put('/api/activity/:id', PUT_ACTIVITY);
    server.delete('/api/activity/:id', DELETE_ACTIVITY);

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});
